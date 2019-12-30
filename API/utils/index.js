const decimalFormatting = value => {
  if (typeof value === "number") {
    return (value % 1).toFixed(2).substring(2);
  } else {
    return null;
  }
};

const treeOfCategories = filters => {
  if (Array.isArray(filters)) {
    const categories = filters.find(category => (category.id = "category"));
    const result = categories
      ? categories.values[0].path_from_root.map(category => category.name)
      : [];
    console.log(result);
    return result;
  } else {
    return [];
  }
};

const mapProduct = ({
  id,
  title,
  price: amount,
  currency_id: currency,
  thumbnail: picture,
  condition,
  shipping: { free_shipping: free_shipping },
  sold_quantity,
  description,
  address: { state_name: address } = {}
}) => {
  return {
    id,
    title,
    price: {
      currency,
      amount,
      decimals: decimalFormatting(amount)
    },
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
    address
  };
};

export const productList = data => {
  return {
    author: {
      name: "Pablo",
      lastname: "Salvatierra Suarez"
    },
    categories: treeOfCategories(data.filters),
    items:
      (data.results && data.results.map(item => mapProduct(item))) ||
      mapProduct(data)
  };
};
