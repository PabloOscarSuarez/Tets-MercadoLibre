import axios from "axios";
import { productList } from "../utils";

const endPointProducList = "https://api.mercadolibre.com/sites/MLA/";
const quantityOfProducts = "4";

const endPointDetailProduct = "https://api.mercadolibre.com/items/";

const getProductList = async (req, res, next) => {
  try {
    const data = await axios.get(
      `${endPointProducList}search?q=${req.query.q}&limit=${quantityOfProducts}`
    );
    res.json(productList(data.data));
  } catch (error) {
    console.log(error);
    next();
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(`${endPointDetailProduct}${id}`);
    const detailProduct = await axios.get(`${endPointDetailProduct}${id}`);
    const descriptionProduct = await axios.get(
      `${endPointDetailProduct}${id}/description`
    );
    detailProduct.data.description = descriptionProduct.data.plain_text;
    const product = productList(detailProduct.data);
    res.json(product);
  } catch (error) {
    console.log(error);
    next();
  }
};

export default { getProductList, getProduct };
