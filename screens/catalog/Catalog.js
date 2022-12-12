import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import PizzaItem from './components/PizzaItem';
import {store} from '../../store';
import {containerStyle} from '../../styles/styles';
import {observer} from 'mobx-react';
import {windowHeight} from '../../styles/styles';
import Menu from '../../components/menu/Menu';

const Catalog = observer(() => {
  const pizzas = store.catalogPizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(store.filterPizzas.toLowerCase()),
  );
  console.log(pizzas);
  return (
    <SafeAreaView style={styles.screenColor}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={containerStyle}>
          {pizzas.map((pizza, key) => {
            return <PizzaItem key={key} {...pizza} />;
          })}
        </View>
      </ScrollView>
      <Menu current="menu" />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screenColor: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: windowHeight,
  },
});

export default Catalog;
