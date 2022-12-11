const initialState = {
  pizzas: [
    {
      name: 'Сырная',
      price: '450',
      image: require('../images/cheese.jpg'),
      id: 1,
    },
    {
      name: 'Сырный цыпленок',
      price: '385',
      image: require('../images/asian.jpg'),
      id: 2,
    },
    {
      name: 'Чизбургер-пицца',
      price: '395',
      image: require('../images/burger.jpg'),
      id: 3,
    },
    {
      name: 'Креветки по-азиатски',
      price: '290',
      image: require('../images/shrimps.jpg'),
      id: 4,
    },
  ],
  cart: [],
  price: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ALL':
      return {
        ...state,
        cart: [],
      };
    case 'COUNT_PRICE':
      let counter = 0;
      state.cart.forEach(element => {
        counter += element.price * element.amount;
      });
      return {
        ...state,
        price: counter,
      };
    case 'ADD_PIZZAS':
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'CHANGE_AMOUNT':
      const idx = state.cart.findIndex(item => item.id === action.payload.id);
      console.log(idx);
      const newItem = state.cart[idx];
      newItem.amount += action.payload.num;
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, idx),
          newItem,
          ...state.cart.slice(idx + 1),
        ],
      };
    case 'DELETE_PIZZA':
      const delIdx = state.cart.findIndex(item => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart.slice(0, delIdx), ...state.cart.slice(delIdx + 1)],
      };
    default:
      return state;
  }
};

export default reducer;
