import express from 'express';
import pevController from '../controllers/pevController';

const router = express.Router();

// Rota para obter PEVs com base no tipo de resíduo selecionado
router.get('/pevs/:residueType', pevController.getPevsByResidueType);

// Rota para obter os dados de um PEV específico indicado no mapa
router.get('/pev/:id', pevController.getPevById);

export default router;
