import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = ({navName}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Image source={require('../../images/logo.jpg')} style={styles.logo} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>React PIZZA</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(navName)}
        style={styles.btn}>
        <Image
          source={
            navName === 'Cart'
              ? require('../../images/cart_1.png')
              : require('../../images/pizza.png')
          }
          style={styles.cart}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    paddingHorizontal: 10,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent:
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 17,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#7B7B7B',
  },
  btn: {
    width: 40,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE5F1E',
    marginRight: 10,
  },
  stick: {
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  logo: {
    width: 30,
    height: 30,
  },
  cart: {
    width: 23,
    height: 23,
  },
});

export default Header;
