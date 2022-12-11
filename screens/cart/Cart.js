import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deleteAllPizzas, countPrices} from '../../actions';
import PurchaseItem from './components/PurchaseItem';

const Cart = ({cart, deleteAll, price, countPrice}) => {
  useEffect(() => {
    countPrice();
  });

  const elements = cart.map((item, key) => {
    return <PurchaseItem key={key} {...item} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{price} ₽</Text>
        <TouchableOpacity style={styles.trash} onPress={deleteAll}>
          <Image
            source={require('../../images/delete.png')}
            style={styles.trashIcon}
          />
          <Text style={styles.trashText}>Очистить корзину</Text>
        </TouchableOpacity>
      </View>
      {elements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  trash: {
    display: 'flex',
    flexDirection: 'row',
  },
  trashIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  trashText: {
    color: 'gray',
  },
});

const mapStateToProps = ({cart, price}) => {
  return {cart, price};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAll: () => dispatch(deleteAllPizzas),
    countPrice: () => dispatch(countPrices),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
