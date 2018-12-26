const express = require('express');
const router = express.Router();

const User = require('../models/user');

//Consultar todos los usuarios
router.get('/', async (req, res) => {
   let user = await User.find();
   res.json(user);
});

//Consultar un solo usuario con su ID
router.get('/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    res.json(user);
});

//Crear un usuario
router.post('/', async (req, res) => {
    const { nombre, apellido, email, usuario } = req.body;
    let user = new User({
        nombre,
        apellido,
        email,
        usuario
    });
    await user.save();
    res.json({status: 'User Received'});   
});

//Actualizar un usuario con su ID
router.put('/:id', async (req, res) => {
    const { nombre, apellido, email, usuario } = req.body;
    let updateUser = {
        nombre,
        apellido,
        email,
        usuario
    };
    await User.findByIdAndUpdate(req.params.id, updateUser);    
    res.json({status: 'User Upadated'});    
});

//Borrar un usuario con su ID
router.delete('/:id', async (req, res) => {
    await User.findOneAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
});

module.exports = router;