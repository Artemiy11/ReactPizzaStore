import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import PurchaseItem from '../purchaseItem';

const Cart = ({data, ChangeAmount, Delete}) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(() => 0);
    data.forEach(element => {
      setPrice(prevState => (prevState += element.price * element.amount));
    });
    console.log(data);
  }, [data, Delete]);

  const elements = data.map((item, key) => {
    return (
      <PurchaseItem
        onDelete={Delete}
        onChangeAmount={ChangeAmount}
        key={key}
        {...item}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{price} ₽</Text>
        <TouchableOpacity style={styles.trash} onPress={() => Delete()}>
          <Image
            source={require('../../images/delete.png')}
            style={styles.trashIcon}
          />
          <Text style={{color: 'gray'}}>Очистить корзину</Text>
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
});

export default Cart;
