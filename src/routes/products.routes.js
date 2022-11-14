import { Router } from "express";
import { createNewProduct, getProducts, getProductById, deleteProductById, getTotalProducts, updateProductById } from "../controllers/products.controller";
import { validateCreate, validateUpdate } from "../validators/products";
const router = Router();

router.get('/products', getProducts);
router.get('/products/count', getTotalProducts);
router.post('/products', validateCreate ,createNewProduct);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);
router.put('/products/:id', validateUpdate ,updateProductById);

export default router;