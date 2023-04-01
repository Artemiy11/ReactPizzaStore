import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../../components/text';
import {Button} from '../../../components/button';
import {useNavigation} from '@react-navigation/native';
import {windowWidth} from '../../../styles/styles';
import {LocalSvg} from 'react-native-svg';

const NoItems = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LocalSvg
        style={styles.img}
        width={230}
        height={230}
        asset={require('../../../assets/images/no-products.svg')}
      />
      <Text style={styles.text}>
        Ваша корзина пуста, добавьте понравишийся товар в из Меню
      </Text>
      <Button
        style={{width: windowWidth - 40}}
        onPress={() => navigation.navigate('Catalog')}>
        Перейти в меню
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  text: {textAlign: 'center', marginVertical: 20, fontSize: 20},
  img: {
    alignSelf: 'center',
  },
});

export default NoItems;
