import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Pev from '../models/pevModel';

const pevController = {
  getPevs: (req: Request, res: Response) => {
    const residue = req.params.residue; // Obtém o tipo de resíduo (ou undefined)
    const filePath = path.join(__dirname, '../data/pevs.geojson');
    const pevsData = fs.readFileSync(filePath, 'utf8');
    const allPevs: Pev[] = JSON.parse(pevsData).features.map((feature: any) => feature);

    // Filtrar os PEVs com base no tipo de resíduo, se fornecido
    const filteredPevs = residue
      ? allPevs.filter((pev: Pev) => pev.properties.residuesAccepted.recyclables.includes(residue))
      : allPevs;

    res.status(200).json(filteredPevs);
  },

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
