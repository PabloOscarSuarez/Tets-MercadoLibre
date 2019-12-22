import axios from "axios";
import { items } from "../utils/search";

const apiUrl = "https://api.mercadolibre.com/sites/MLA/";
const quantityOfProducts = "4";

const nuevo = async (req, res, next) => {
  const data = await axios.get(
    `${apiUrl}search?q=${req.query.q}&limit=${quantityOfProducts}`
  );
  res.json(items(data.data));
};

export default nuevo;
