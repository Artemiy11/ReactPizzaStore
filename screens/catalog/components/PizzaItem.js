import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../../components/text';

import SwitchSelector from 'react-native-switch-selector';
import {Button} from '../../../components/button';

const PizzaItem = ({name, price, image, id, onAdding}) => {
  const [pizza, setPizza] = useState({
    name: name,
    amount: 1,
    price: price,
    image: image,
    doughType: 'Тонкое тесто',
    length: 25,
    id: id,
  });

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
        <Text style={styles.price}>от {price} ₽</Text>
        <Button
          text={'+ Добавить'}
          style={styles.btn}
          textColor={'#fff'}
          click={() => onAdding(pizza)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    marginTop: 11,
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectorWrapper: {
    width: '100%',
    height: 104,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 7,
    marginTop: 22,
  },
  doughSelector: {
    paddingBottom: 7,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FE5F1E',
    width: 132,
    height: 40,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bottomWrapper: {
    marginTop: 17,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default PizzaItem;
