import express from 'express';
import productsRoute from './products.js';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/products', productsRoute);

export default router;

//parei pagina 60