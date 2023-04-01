import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Text from '../../../components/text';
import {ActivityIndicator, Modal} from 'react-native-paper';
import {mainColor, windowWidth} from '../../../styles/styles';
import {store} from '../../../store';
import {LocalSvg} from 'react-native-svg';

const ConfigView = ({price, load}) => {
  const [adress, setAdress] = useState(store.userData.address);
  const [card, setCard] = useState('1234 5678 9999 9999');

  function calculateDelivery() {
    if (500 - price <= 0) {
      return 'Бесплатно';
    } else {
      return 500 - price + '₽';
    }
  }

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Доставка</Text>
      <View style={styles.row}>
        <Text style={styles.rowText}>Адрес</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setAdress(text)}
          value={adress}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.rowText}>Карта</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setCard(text)}
          value={card}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>{store.countProducts()} товара</Text>
        <Text style={styles.wrapperText}>{price}₽</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>Доставка</Text>
        <Text style={styles.wrapperText}>{calculateDelivery()}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>Итого</Text>
        <Text>{price}₽</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style={styles.btn} onPress={load}>
          <Text style={styles.btnText}>Заказать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ResultView = ({setConfigModalActive}) => {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <LocalSvg asset={require('../../../assets/images/ok.svg')} />
      <Text style={{fontSize: 20, fontWeight: '500', marginTop: 10}}>
        Покупка прошла успешно!
      </Text>
      <Text style={{marginTop: 10, fontSize: 18}}>
        Ваш заказ приедет{'\n'}в течение 1,5 часа
      </Text>
      <TouchableOpacity
        style={[styles.btn, {marginTop: 30, width: '70%'}]}
        onPress={() => setConfigModalActive(false)}>
        <Text style={styles.btnText}>Отлично!</Text>
      </TouchableOpacity>
    </View>
  );
};

const AccessModal = ({configModalActive, setConfigModalActive, price}) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  function load() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult('ok');
    }, 700);
  }

  useEffect(() => {
    if (loading === 'ok') {
      store.clearCart();
    }
  }, [loading]);

  return (
    <Modal
      style={{paddingHorizontal: 20}}
      visible={configModalActive}
      onDismiss={() => setConfigModalActive(false)}
      contentContainerStyle={styles.modal}>
      {loading ? (
        <ActivityIndicator color={mainColor} size={50} />
      ) : result === 'ok' ? (
        <ResultView setConfigModalActive={setConfigModalActive} />
      ) : (
        <ConfigView price={price} load={load} />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  modal: {
    alignSelf: 'center',
    width: windowWidth - 40,
    height: 420,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  row: {
    marginTop: 15,
    width: '100%',
  },
  rowText: {
    fontSize: 17,
  },
  textInput: {
    marginTop: 10,
    width: '100%',
    fontSize: 17,
    borderColor: mainColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
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
  modalContainer: {height: '100%', padding: 20},
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'gray',
    marginTop: 30,
    alignSelf: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  wrapperText: {color: 'gray'},
});

export default AccessModal;
