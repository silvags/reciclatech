import express from 'express';
import geocodingController from '../controllers/geocodingController';
import geolocationController from '../controllers/geolocationController';
import pevController from '../controllers/pevController';

const router = express.Router();

// Rota para obter a geocodificação do endereço fornecido pelo usuário
router.post('/userAddress', geocodingController.getGeocoding);
// Rota para obter a geolocalização do usuário
router.post('/userCoordinates', geolocationController.getGeolocation);
// Rota para obter PEVs com base no tipo de resíduo selecionado
router.get('/pevs/:residue', pevController.getPevs);
// Rota para obter os dados de um PEV específico indicado no mapa
router.get('/pev/:id', pevController.getPev);

export default router;