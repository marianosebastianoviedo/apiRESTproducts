import { Router } from "express";
import { createNewProduct, getProducts, getProductById, deleteProductById, getTotalProducts, updateProductById } from "../controllers/products.controller";
const router = Router();

router.get('/products', getProducts);
router.get('/products/count', getTotalProducts);
router.post('/products', createNewProduct);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);
router.put('/products/:id', updateProductById);

export default router;