import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Text from '../../components/text';
import PurchaseItem from './components/PurchaseItem';
import {store} from '../../store';
import {reaction} from 'mobx';
import {mainColor, windowHeight} from '../../styles/styles';
import NoItems from './components/NoItems';
import AccessModal from './components/AccessModal';

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [configModalActive, setConfigModalActive] = useState(false);

  useEffect(() => {
    setCart(store.cart);
    setPrice(store.price);
  }, []);

  useEffect(() => {
    store.countPrice();
  });

  reaction(
    () => store.price,
    () => setPrice(store.price),
  );

  reaction(
    () => store.cart,
    () => {
      setCart(store.cart);
      console.log(store.cart);
    },
  );

  const elements = cart.map((item, key) => {
    return <PurchaseItem key={key} {...item} />;
  });

  return (
    <>
      <SafeAreaView style={styles.screenColor}>
        <ScrollView contentContainerStyle={styles.container}>
          {elements.length === 0 ? (
            <NoItems />
          ) : (
            <>
              <View style={styles.headerWrapper}>
                <Text style={styles.title}>
                  {store.countProducts()} товара на {price} ₽
                </Text>
                <TouchableOpacity
                  style={styles.trash}
                  onPress={() => {
                    store.clearCart();
                  }}>
                  <Image
                    source={require('../../assets/images/delete.png')}
                    style={styles.trashIcon}
                  />
                  <Text style={styles.trashText}>Очистить корзину</Text>
                </TouchableOpacity>
              </View>
              <View style={{padding: 20}}>{elements}</View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => setConfigModalActive(true)}>
                  <Text style={styles.btnText}>Оформить за {price} рублей</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
      {configModalActive ? (
        <AccessModal
          configModalActive={configModalActive}
          setConfigModalActive={setConfigModalActive}
          price={price}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: windowHeight,
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  screenColor: {
    backgroundColor: '#fff',
    height: '100%',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
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
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
    backgroundColor: mainColor,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  btnContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default Cart;
