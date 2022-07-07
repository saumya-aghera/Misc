import express from 'express'
import SellBack from '../models/sellback.js';
const router = express.Router();
import multer from 'multer';
//const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';
//const {v4: uuidv4} = require('uuid');
//const path = require("path")
import path from 'path';
//import Sell from '../../client/src/Components/Sell/Sell.js';
// router.route('/add').post((req, res) => {
//   SellBack.create(req.body)
//   .then(sellback => res.json({ msg: 'added successfully' }))
//   .catch(err => res.status(400).json({ error: 'Unable to add this' }));
// });

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'images')
  },
  filename: function(req, file, cb){
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  } else {
    cb(null, false);
  }
}
let upload = multer({ storage, fileFilter });
router.route('/add').post(upload.single('photo'), (req, res) => {
    const type = req.body.type;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const number = req.body.number;
    const address = req.body.address;
    const photo = req.file.filename;
    const newUserData = {
      type,
      price,
      quantity,
      number,
      address,
      photo
    }
    const newUser = new SellBack(newUserData);
    newUser.save()
           .then(() => res.json('done bro'))
           .catch(err => res.status(400).json('Error: ' + err));
});
// router.post('/add', async (req, res) => {
//   const article = new SellBack(req.body);

//   try {
//       console.log("try");
//       console.log(article);
//       const savedArticle = await article.save();
//       console.log(savedArticle);
//       res.json(savedArticle);
//   } catch (err) {
//       console.log("error :" + err)
//       res.json({ message: err })
//   };

// });
// router.post('/add', (req, res) => {
//   SellBack.create(req.body)
//     .then(book => res.json({ msg: 'Submitted' }))
//     .catch(err => res.status(400).json({ error: 'Unable to submit' }));
// });
router.route('/').get((req, res) => {
    SellBack.find()
      .then(sellbacks => res.json(sellbacks))
      .catch(err => res.status(400).json('Error: ' + err));
  });


export default router;
