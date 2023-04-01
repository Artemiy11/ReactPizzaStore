import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../../components/text';
import theme from '../../../theme';

const MenuSlider = () => {
  const data = [
    {name: 'Пицца', type: 'pizza'},
    {name: 'Комбо', type: 'combo'},
    {name: 'Закуски', type: 'snacks'},
    {name: 'Десерты', type: 'desserts'},
    {name: 'Напитки', type: 'drinks'},
    {name: 'Соусы', type: 'sauces'},
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      style={styles.slider}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToAlignment="start"
      data={data}
      bounces={false}
      horizontal
      renderItem={data => (
        <TouchableOpacity
          onPress={() => OnSelect(data.type)}
          style={styles.textWrapper}>
          <Text style={styles.text}>{data.item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginBottom: theme.space20,
    maxHeight: theme.space40,
  },
  textWrapper: {
    height: theme.space40,
    marginRight: theme.space14,
    borderRadius: theme.space20,
    padding: theme.aligned(6),
    backgroundColor: '#F0F0F0',
  },
  text: {
    padding: theme.aligned(6),
    height: theme.space40,
  },
});

export default MenuSlider;
