import React from 'react';
import {View, ScrollView} from 'react-native';
import PizzaCart from '../pizzaCart';

import {containerStyle} from '../../styles/styles';

const pizzas = [
  {name: 'Сырная', price: '450', image: require('../../images/cheese.jpg')},
  {
    name: 'Сырный цыпленок',
    price: '385',
    image: require('../../images/asian.jpg'),
  },
  {
    name: 'Чизбургер-пицца',
    price: '395',
    image: require('../../images/burger.jpg'),
  },
  {
    name: 'Креветки по-азиатски',
    price: '290',
    image: require('../../images/shrimps.jpg'),
  },
];

const AllPizzas = ({onAdding}) => {
  return (
    <ScrollView>
      <View style={containerStyle}>
        {pizzas.map((pizza, key) => {
          return <PizzaCart key={key} onAdding={onAdding} {...pizza} />;
        })}
      </View>
    </ScrollView>
  );
};

export default AllPizzas;
