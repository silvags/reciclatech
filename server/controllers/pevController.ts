import express from 'express';
import { PevModel } from '../models/pevModel';

export const getPevByResidueType = async (req: express.Request, res: express.Response) => {
  try{
    const residueType = req.params.residueType;

    if (residueType !== 'recyclables' && residueType !== 'electronics'){
      return res.status(400).json({message: 'Tipo de resíduo inválido.'});
    }

    const query = {[`residuesAccepted.${residueType}`]: {$exists: true, $ne: []},
  };

  const Pevs = await PevModel.find(query)
  .select('geometry name description category')
  .exec();

  return res.status(200).json(Pevs);
  } catch (error) {
    return res.status(500).json({message: 'Erro ao buscar pevs.'});
  }
};

export const getPevByName = async (req: express.Request, res: express.Response) => {
  try{
    const pevName = req.params.name;

    if (!pevName){
      return res.status(400).json({message: 'Nome do PEV não informado ou inválido.'});
    }

    const query = {name: pevName};

    const pev = await PevModel.findOne(query)
    .select('-_id -__v -geometry')
    .exec();

    return res.status(200).json(pev);
  } catch (error) {
    res.json({message: 'Erro ao buscar pev.'});
  }
}

export default {
  getPevByResidueType,
  getPevByName,
};