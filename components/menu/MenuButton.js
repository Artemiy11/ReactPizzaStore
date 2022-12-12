import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {LocalSvg} from 'react-native-svg';
import Text from '../text';

const MenuButton = ({text, image, imageActive, current}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <LocalSvg
        style={styles.icon}
        width={30}
        height={30}
        asset={current ? imageActive : image}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: 'green',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    marginTop: 5,
    fontWeight: '500',
  },
});

export default MenuButton;
