const express = require('express');

const HeroController = require('../controllers/controller');

const router = express.Router();

router.post('/hero', HeroController.createHero);
router.put('/hero/:id', HeroController.updateHero);
router.delete('/hero/:id', HeroController.deleteHero);
router.get('/hero/:id', HeroController.getHeroById);
router.get('/heroes', HeroController.getHeroes);

module.exports = router;