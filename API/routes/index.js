import express from "express";

import searchController from "../controllers/searchController";
import productController from "../controllers/productController";

const router = express.Router();

const routes = () => {
  router.get("/items", searchController);
  router.get("/items/:id", productController);
  return router;
};

export default routes;
