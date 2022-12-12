import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../text';

const Button = props => {
  return (
    <TouchableOpacity onPress={() => props.click()}>
      <View style={props.style}>
        <Text style={{color: props.textColor, fontWeight: 'bold'}}>
          {props.text}
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
});

export {Button, ImageButton};
