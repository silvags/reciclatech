import express from 'express';
const router = express.Router();

import pevController from '../controllers/pevController';

// Rota para obter PEVs com base no tipo de resíduo selecionado
router.get('/pevs/:residueType', pevController.getPevByResidueType);

// Rota para obter os dados de um PEV específico selecionado no mapa
router.get('/pev/:name', pevController.getPevByName);

export default router;
