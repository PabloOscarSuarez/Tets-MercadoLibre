export const decimalFormatting = value => {
  return (value % 1).toFixed(2).substring(2);
};

export const treeOfCategories = filters => {
  try {
    const categories = filters.find(category => (category.id = "category"));
    const result = categories
      ? categories.values[0].path_from_root.map(category => category.name)
      : [];
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
};

export const mapProduct = ({
  id,
  title,
  price: amount,
  currency_id: currency,
  thumbnail: picture,
  condition,
  shipping: { free_shipping: free_shipping }
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
    free_shipping
  };
};

export const items = data => {
  return {
    author: {
      name: "Pablo",
      lastname: "Salvatierra Suarez"
    },
    categories: treeOfCategories(data.filters),
    items: data.results.map(item => mapProduct(item))
  };
};
