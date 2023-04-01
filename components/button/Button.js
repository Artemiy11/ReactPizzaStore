import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../text';

const Button = ({onPress, style, children, type = 'primary'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          type === 'primary' ? styles.primaryBtn : styles.outlineBtn,
          style,
        ]}>
        <Text
          style={{
            color: type === 'primary' ? '#fff' : '#000',
            fontWeight: 'bold',
          }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ImageButton = ({sign, color = '#FE5F1E'}) => {
  return (
    <TouchableOpacity style={[styles.container, {borderColor: color}]}>
      <Text style={{color: color, fontWeight: 'bold'}}>{sign}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 20,
  },
  primaryBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FE5F1E',
    width: 132,
    height: 40,
  },
  outlineBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#FE5F1E',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: 132,
    height: 40,
  },
});

export {Button, ImageButton};
