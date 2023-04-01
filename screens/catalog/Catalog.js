import React, {useEffect} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import PizzaItem from './components/PizzaItem';
import NotFoundScreen from './components/NotFoundScreen';
import {store} from '../../store';
import {containerStyle} from '../../styles/styles';
import {observer} from 'mobx-react';
import {windowHeight} from '../../styles/styles';
import {useIsFocused} from '@react-navigation/native';
import Header from '../../components/header';
import theme from '../../theme';
import MenuSlider from './components/MenuSlider';

const Catalog = observer(() => {
  const isFocused = useIsFocused();
  const filteredCatalog = store.catalogPizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(store.filterText.toLowerCase()),
  );

  useEffect(() => {
    isFocused ? store.updateFilterText('') : null;
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.screenColor}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {filteredCatalog.length === 0 ? (
          <NotFoundScreen />
        ) : (
          <View style={containerStyle}>
            {/* <MenuSlider /> */}
            {filteredCatalog.map((pizza, key) => {
              return <PizzaItem key={key} {...pizza} />;
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  screenColor: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  container: {
    // paddingTop: theme.space20,
    // paddingHorizontal: theme.space20,
    paddingBottom: theme.aligned(120),
    minHeight: windowHeight,
  },
});

export default Catalog;
