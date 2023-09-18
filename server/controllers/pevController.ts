import { Request, Response } from 'express';
import Feature from '../models/pevModel';

export const getPevsByResidueType = async (req: Request, res: Response) => {
  try {
    const residueType = req.params.residueType;
    const pevs = await Feature.find({ [`properties.residuesAccepted.${residueType}`]: { $exists: true } });
    res.send(pevs);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPevById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pev = await Feature.findOne({ 'properties.id': id });
    if (!pev) {
      return res.status(404).send('PEV não encontrado');
    }
    res.send(pev);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
    getPevsByResidueType,
    getPevById,
}