'use strict';

const Router = require('express');
const contactRepo = require('../repo/contactRepository');

const getContactRoutes = (app) => {
    const router = new Router();

    router
        .get('/get/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = contactRepo.getById(id);
            res.send(result);
        })
        .get('/all', (req, res) => {
            const result = contactRepo.getAll();
            res.send(result);
        })
        .get('/remove', (req, res) => {
            contactRepo.remove();
            const result = 'Last contact remove. Total count: '
                + contactRepo.contacts.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const contact = req.body;
            const result = contactRepo.save(contact);
            res.send(result);
        });

    app.use('/contact', router);
};

module.exports = getContactRoutes;
