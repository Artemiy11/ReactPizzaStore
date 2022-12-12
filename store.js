import {makeAutoObservable} from 'mobx';

class Store {
  filterPizzas = '';
  catalogPizzas = [
    {
      name: 'Сырная',
      price: '450',
      image: require('./images/cheese.jpg'),
      id: 1,
    },
    {
      name: 'Сырный цыпленок',
      price: '385',
      image: require('./images/asian.jpg'),
      id: 2,
    },
    {
      name: 'Чизбургер-пицца',
      price: '395',
      image: require('./images/burger.jpg'),
      id: 3,
    },
    {
      name: 'Креветки по-азиатски',
      price: '290',
      image: require('./images/shrimps.jpg'),
      id: 4,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  updatePizzaFilter(text) {
    this.filterPizzas = text;
  }
}

export const store = new Store();
