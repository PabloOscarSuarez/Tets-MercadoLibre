const decimalFormatting = value => {
  if (typeof value === "number") {
    return (value % 1).toFixed(2).substring(2);
  } else {
    return null;
  }
};

const formatImg = img => {
  const regex = /(\d{6}-MLA\d{11}_\d{6})/g;
  const match = regex.exec(img);
  return `https://http2.mlstatic.com/D_Q_NP_${match[1]}-Q.webp'`;
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
  thumbnail,
  pictures = [],
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
      amount: Math.floor(amount),
      decimals: decimalFormatting(amount)
    },
    picture: (!!pictures.length && pictures[0].url) || formatImg(thumbnail),
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
