const shortText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const filterSearch = (products, search) => {
  if (!search) return products;
  const getSearch = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return getSearch;
};

const filterCategory = (products, category) => {
  if (!category) return products;

  const getCategory = products.filter(
    (product) => product.category === category
  );
  return getCategory;
};

export { shortText, filterSearch, filterCategory };
