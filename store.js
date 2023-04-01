import {makeAutoObservable, makeObservable} from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  filterText = '';
  catalogPizzas = [
    {
      name: 'Сырная',
      countPrice(length) {
        switch (length) {
          case 25:
            return '350';
          case 30:
            return '400';
          case 40:
            return '500';
        }
      },
      price: '350',
      image: require('./assets/images/cheese.jpg'),
      id: 1,
    },
    {
      name: 'Сырный цыпленок',
      countPrice(length) {
        switch (length) {
          case 25:
            return '385';
          case 30:
            return '435';
          case 40:
            return '540';
        }
      },
      price: '385',
      image: require('./assets/images/asian.jpg'),
      id: 2,
    },
    {
      name: 'Чизбургер-пицца',
      countPrice(length) {
        switch (length) {
          case 25:
            return '395';
          case 30:
            return '460';
          case 40:
            return '540';
        }
      },
      price: '395',
      image: require('./assets/images/burger.jpg'),
      id: 3,
    },
    {
      name: 'Креветки по-азиатски',
      countPrice(length) {
        switch (length) {
          case 25:
            return '290';
          case 30:
            return '350';
          case 40:
            return '410';
        }
      },
      price: '290',
      image: require('./assets/images/shrimps.jpg'),
      id: 4,
    },
  ];
  catalogSnacks = [
    {
      name: 'Шаурма мясная',
      price: '280',
      image: require('./assets/images/shaurma-meat.webp'),
      id: 5,
    },
    {
      name: 'Шаурма карри',
      price: '250',
      image: require('./assets/images/shaurma-carri.webp'),
      id: 6,
    },
    {
      name: 'Шаурма острая',
      price: '270',
      image: require('./assets/images/shaurma-spicy.webp'),
      id: 7,
    },
    {
      name: 'Картошка фри',
      price: '70',
      image: require('./assets/images/fries.webp'),
      id: 8,
    },
    {
      name: 'Крылышки',
      price: '260',
      image: require('./assets/images/chicken.webp'),
      id: 9,
    },
  ];
  catalogDrinks = [
    {
      name: 'Кофе американо',
      price: '110',
      image: require('./assets/images/coffee-americano.webp'),
      id: 10,
    },
    {
      name: 'Кофе карамельный',
      price: '110',
      image: require('./assets/images/coffee-caramel.webp'),
      id: 11,
    },
    {
      name: 'Кофе c кокосовым серопом',
      price: '110',
      image: require('./assets/images/coffee-coconut.webp'),
      id: 12,
    },
  ];
  cart = [];
  price = 0;
  userData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birthDate: '',
    address: '',
  };

  updateFilterText(text) {
    this.filterText = text;
  }

  updateCart(pizza) {
    let mark = false;
    let id = 0;
    this.cart.forEach(cartPizza => {
      if (
        cartPizza['name'] === pizza['name'] &&
        cartPizza['length'] === pizza['length'] &&
        cartPizza['doughType'] === pizza['doughType']
      ) {
        mark = true;
        id = cartPizza.id;
        return;
      }
    });

    if (mark) {
      this.changePizzaAmount(id, 1);
    } else {
      this.cart = [...this.cart, pizza];
    }
  }

  clearCart() {
    this.cart = [];
  }

  countPrice() {
    let counter = 0;

    this.cart.forEach(element => {
      counter += element.price * element.amount;
    });

    this.price = counter;
  }

  countProducts() {
    let totalAmount = 0;
    this.cart.forEach(item => {
      totalAmount += item.amount;
    });

    return totalAmount;
  }

  findPizza(id) {
    return this.catalogPizzas.find(pizzaId => pizzaId === id);
  }

  deletePizza(id) {
    const delIdx = this.cart.findIndex(item => item.id === id);
    this.cart = [...this.cart.slice(0, delIdx), ...this.cart.slice(delIdx + 1)];
  }

  changePizzaAmount(id, num) {
    const idx = this.cart.findIndex(item => item.id === id);
    const newItem = this.cart[idx];
    newItem.amount += num;

    this.cart = [
      ...this.cart.slice(0, idx),
      newItem,
      ...this.cart.slice(idx + 1),
    ];
  }

  updateUserData(newData) {
    this.userData = newData;
  }
}

export const store = new Store();
