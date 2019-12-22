import express from "express";

import searchController from "../controllers";

const router = express.Router();

const routes = () => {
  router.get("/items", searchController.getProductList);
  router.get("/items/:id", searchController.getProduct);
  return router;
};

export default routes;
