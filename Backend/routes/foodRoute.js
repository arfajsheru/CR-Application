import express from 'express';
import {addFood} from '../controller/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
  destination: 'uploads', // konse folder me add kareg img ko local machine me
  filename: (req, file, cb) => {
    // file ka name
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

// Multer instace clear karega
const upload = multer({storage: storage});

foodRouter.post('/add', upload.single('image'), addFood);

export default foodRouter;
