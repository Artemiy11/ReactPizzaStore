import React from 'react';
import {View, ScrollView} from 'react-native';
import PizzaItem from './components/PizzaItem';
import {connect} from 'react-redux';
import {addPizzasToCart} from '../../actions';

import {containerStyle} from '../../styles/styles';

const Catalog = ({onAdding, pizzas}) => {
  return (
    <ScrollView>
      <View style={containerStyle}>
        {pizzas.map((pizza, key) => {
          return <PizzaItem key={key} onAdding={onAdding} {...pizza} />;
        })}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdding: pizza => dispatch(addPizzasToCart(pizza)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
