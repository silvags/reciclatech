import { Request, Response } from 'express';

interface NominatimResult {
  lat: string;
  lon: string;
}

const geocodingController = {
  getGeocoding: async (req: Request, res: Response) => {
    // Obtem o endereço do corpo da requisição
    const { address } = req.body;

    // Constroi a URL para a API do Nominatim
    const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`;

    try {
      // Use require para importar o 'node-fetch' como um módulo CommonJS
      const fetch = require('node-fetch');

      const response = await fetch(apiUrl);
      const data = await response.json() as NominatimResult[];

      if (data.length > 0) {
        const firstResult = data[0];
        const coordinates = {
          latitude: parseFloat(firstResult.lat),
          longitude: parseFloat(firstResult.lon),
        };
        res.status(200).json(coordinates);
      
      } else {
        res.status(404).json({ message: 'Endereço não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  },
};

export default geocodingController;
