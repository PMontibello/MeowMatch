const express = require('express');
const petController = require('../controllers/petController');
const userController = require('../controllers/userController');
const router = express.Router();
const multer = require('multer');
// router.get('/pets', petController.getPets);

// router.post('/pets', petController.addPet);

router.post('/login', userController.login);

router.get('/pets', petController.getPets, (req, res) => {
  res.status(200).json(res.locals.pets);
});

router.get('/:name', petController.getPetByName, (req, res) => {
  res.status(302).json(res.locals.petByName);
});

router.post('/pets', petController.addPet, (req, res) => {
  res.status(201).json(res.locals.newPet);
});
router.get('/client/public/images', (req, res)=>{
  console.log('Attempting to serve images')
  res.status(200)
})
router.post('/client/public/images', petController.uploadPet, (req, res)=>{
  console.log('attempting to post image')

  res.status(201).json(res.locals.body);
})

router.patch('/:name', petController.updatePet, (req, res) => {
  res.status(200).json(res.locals.updatedPet);
});

router.delete('/:name', petController.deletePet, (req, res) => {
  res.status(202).json({ message: 'Pet deleted successfully' });
});
module.exports = router;
