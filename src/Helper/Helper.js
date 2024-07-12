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

const getQuery = (query, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...reset } = query;
    return reset;
  }
  if (newQuery.category === "all") {
    const { category, ...reset } = query;
    return reset;
  }

  return {
    ...query,
    ...newQuery,
  };
};

const sumPrice = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const newquantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortText,
  filterSearch,
  filterCategory,
  getQuery,
  sumPrice,
  sumQuantity,
  newquantity,
};
