import React from 'react';
import {Text as ReactNativeText, StyleSheet} from 'react-native';
import LangModel from '../../langModel';

const Text = props => {
  return (
    <ReactNativeText {...props} style={[styles.text, props.style]}>
      {props.notTranslate ? props.children : LangModel.rk(props.children)}
    </ReactNativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default Text;
