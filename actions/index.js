const deleteAllPizzas = {type: 'DELETE_ALL'};
const countPrices = {type: 'COUNT_PRICE'};
const deletePizza = id => {
  return {type: 'DELETE_PIZZA', payload: id};
};
const changePizzaAmount = (id, num) => {
  return {type: 'CHANGE_AMOUNT', payload: {id, num}};
};
const addPizzasToCart = pizza => {
  return {type: 'ADD_PIZZAS', payload: pizza};
};

export {
  deleteAllPizzas,
  countPrices,
  deletePizza,
  changePizzaAmount,
  addPizzasToCart,
};
