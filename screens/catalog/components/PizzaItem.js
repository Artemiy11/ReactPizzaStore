import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../../components/text';
import SwitchSelector from 'react-native-switch-selector';
import {Button} from '../../../components/button';
import {store} from '../../../store';
import theme from '../../../theme';

const PizzaItem = ({name, price, countPrice, image, id, onAdding}) => {
  const [pizza, setPizza] = useState({
    name: name,
    amount: 1,
    countPrice: countPrice,
    price: price,
    image: image,
    doughType: 'Тонкое тесто',
    length: 25,
    id: id,
  });
  const [newPizzaPrice, setNewPizzaPrice] = useState(price);

  function onAdd() {
    pizza.id = Math.floor(Math.random() * 1000);
    store.updateCart(pizza);
  }

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.selectorWrapper}>
        <SwitchSelector
          style={styles.doughSelector}
          onPress={dough =>
            setPizza(prevState => {
              let newPizza = prevState;
              newPizza.doughType = dough;
              return newPizza;
            })
          }
          textColor={'000'}
          selectedColor={'#000'}
          buttonColor={'#fff'}
          borderColor={'#f3f3f3'}
          backgroundColor={'#f3f3f3'}
          borderRadius={10}
          initial={0}
          options={[
            {label: 'Тонкое', value: 'Тонкое тесто'},
            {label: 'Традиционное', value: 'Традиционное тесто'},
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
        <SwitchSelector
          style={styles.doughSelector}
          onPress={length =>
            setPizza(prevState => {
              let newPizza = prevState;
              newPizza.length = length;
              newPizza.price = pizza.countPrice(length);
              setNewPizzaPrice(newPizza.price);
              return newPizza;
            })
          }
          textColor={'000'}
          selectedColor={'#000'}
          buttonColor={'#fff'}
          borderColor={'#f3f3f3'}
          backgroundColor={'#f3f3f3'}
          borderRadius={10}
          initial={0}
          options={[
            {label: '25см', value: 25},
            {label: '30см', value: 30},
            {label: '40см', value: 40},
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.price}>{newPizzaPrice}₽</Text>
        <Button style={styles.btn} textColor={'#fff'} onPress={() => onAdd()}>
          + Добавить
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: theme.aligned(250),
    height: theme.aligned(250),
  },
  wrapper: {
    paddingHorizontal: theme.space20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.space28,
  },
  title: {
    marginTop: theme.space10,
    fontWeight: 'bold',
    fontSize: theme.fontSize20,
  },
  selectorWrapper: {
    width: '100%',
    height: theme.aligned(104),
    backgroundColor: '#F3F3F3',
    borderRadius: theme.space10,
    padding: theme.aligned(7),
    marginTop: theme.aligned(22),
  },
  doughSelector: {
    paddingBottom: theme.aligned(7),
    color: '#000',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.aligned(20),
    backgroundColor: '#FE5F1E',
    width: theme.aligned(132),
    height: theme.aligned(40),
  },
  price: {
    fontSize: theme.aligned(22),
    fontWeight: 'bold',
  },
  bottomWrapper: {
    marginTop: theme.aligned(17),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default PizzaItem;
