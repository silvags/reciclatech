import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Pev from '../models/pevModel';

const pevController = {
  getPevs: (req: Request, res: Response) => {
    // Obtém o tipo de resíduo (recicláveis ou eletrônicos) do arquivo geojson
    const residue = req.params.residue; 
    const filePath = path.join(__dirname, '../data/pevs.geojson');
    const pevsData = fs.readFileSync(filePath, 'utf8');
    const allPevs: Pev[] = JSON.parse(pevsData).features.map((feature: any) => feature);

    // Filtra os PEVs com base no tipo de resíduo selecionado
    let filteredPevs: Pev[] = [];
    
    if (residue === "recyclables" || residue === "electronics"){
      filteredPevs = allPevs.filter(pev => {
        if (residue === "recyclables"){
          return pev.properties.residuesAccepted.recyclables.length > 0;
        } else {
          return pev.properties.residuesAccepted.electronics.length > 0;
        }
      });
    }

        res.status(200).json(filteredPevs);
  },
  // Obtém os dados de um PEV específico indicado no mapa
  getPev: (req: Request, res: Response) => {
    const pevId = req.params.id;
    const filePath = path.join(__dirname, '../data/pevs.geojson');
    const pevsData = fs.readFileSync(filePath, 'utf8');
    const pevs: Pev[] = JSON.parse(pevsData).features.map((feature: any) => feature);

    const pev = pevs.find((pev: Pev) => pev.properties.name === pevId);

    if (pev) {
      res.status(200).json(pev);
    } else {
      res.status(404).json({ message: 'PEV não encontrado.' });
    }
  },
};

export default pevController;
