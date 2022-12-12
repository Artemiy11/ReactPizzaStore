import React from 'react';
import Text from '../text';
import {View, StyleSheet} from 'react-native';
import MenuButton from './MenuButton';

const Menu = ({current}) => {
  const btns = [
    {
      value: 'menu',
      text: 'Меню',
      image: require('../../images/menu.svg'),
      imageActive: require('../../images/menu-active.svg'),
    },
    {
      value: 'profile',
      text: 'Профиль',
      image: require('../../images/profile.svg'),
      imageActive: require('../../images/profile-active.svg'),
    },
    {
      value: 'cart',
      text: 'Корзина',
      image: require('../../images/cart.svg'),
      imageActive: require('../../images/cart-active.svg'),
    },
  ];

  return (
    <View style={styles.container}>
      {btns.map((btn, key) => {
        let currentBtn = false;
        btn.value === current ? (currentBtn = true) : (currentBtn = false);
        return <MenuButton {...btn} key={key} current={currentBtn} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#DFDFDF',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default Menu;
