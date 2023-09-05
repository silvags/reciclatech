import { Request, Response } from 'express';

const geolocationController = {
  getGeolocation: (req: Request, res: Response) => {

    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      res.status(400).json({ message: 'Localização não disponível.' });
      return;
    }

    const userLocation = {
      latitude,
      longitude,
    };

    res.json(userLocation);
  },
};

export default geolocationController;