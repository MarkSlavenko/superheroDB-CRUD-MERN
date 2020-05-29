const Hero = require('../models/model');

createHero = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a hero!',
        })
    }

    const hero = new Hero(body);

    if (!hero) {
        return res.status(400).json({ success: false, error: err })
    }

    hero
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: hero._id,
                message: 'Hero created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Hero not created!',
            })
        })
};

updateHero = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update!',
        })
    }

    Hero.findOne({ _id: req.params.id }, (err, hero) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Hero not found!',
            })
        }
        hero.nickname = body.nickname;
        hero.real_name = body.real_name;
        hero.origin_description = body.origin_description;
        hero.superpowers = body.superpowers;
        hero.catch_phrase = body.catch_phrase;
        hero.images = body.images;
        hero
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: hero._id,
                    message: 'Hero updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Hero not updated!',
                })
            })
    })
};

deleteHero = async (req, res) => {
    await Hero.findOneAndDelete({ _id: req.params.id }, (err, hero) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hero) {
            return res
                .status(404)
                .json({ success: false, error: `Hero not found` })
        }

        return res.status(200).json({ success: true, data: hero })
    }).catch(err => console.log(err))
};

getHeroById = async (req, res) => {
    await Hero.findOne({ _id: req.params.id }, (err, hero) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!hero) {
            return res
                .status(404)
                .json({ success: false, error: `Hero not found` })
        }
        return res.status(200).json({ success: true, data: hero })
    }).catch(err => console.log(err))
};

getHeroes = async (req, res) => {
    await Hero.find({}, (err, heroes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!heroes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Hero not found` })
        }
        return res.status(200).json({ success: true, data: heroes })
    }).catch(err => console.log(err))
};

module.exports = {
    createHero,
    updateHero,
    deleteHero,
    getHeroById,
    getHeroes
};