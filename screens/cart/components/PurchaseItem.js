import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/text';
import {store} from '../../../store';

const PurchaseItem = ({id, name, price, amount, image, doughType, length}) => {
  return (
    <View style={styles.purchaseWrapper}>
      <View style={styles.purchaseHead}>
        <View style={styles.pizzaWrapper}>
          <Image source={image} style={styles.image} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.name}>{name}</Text>
            <Text>
              {doughType}, {length} см
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => store.deletePizza(id)}>
          <Text style={{fontSize: 20}}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.purchaseBottom}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>{price} ₽ </Text>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              if (amount - 1 < 1) {
                store.deletePizza(id);
              } else {
                store.changePizzaAmount(id, -1);
              }
            }}>
            <Text style={styles.counterText}>–</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{amount}</Text>
          <TouchableOpacity onPress={() => store.changePizzaAmount(id, 1)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  purchaseWrapper: {
    height: 150,
  },
  purchaseHead: {
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  purchaseBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c8c8c8',
    paddingBottom: 15,
  },
  pizzaWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  delete: {
    display: 'flex',
    alignSelf: 'flex-start',
  },
  counter: {
    width: 100,
    height: 30,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f3f4',
    borderRadius: 15,
  },
  counterText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
});

export default PurchaseItem;
