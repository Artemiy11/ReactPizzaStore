import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {LocalSvg} from 'react-native-svg';
import Text from '../text';
import {mainColor} from '../../styles/styles';
import theme from '../../theme';

const TabBarButton = ({screen, accessibilityState, onPress, productCount}) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity style={styles.tubButton} onPress={onPress}>
      <LocalSvg
        width={theme.space30}
        height={theme.space30}
        asset={focused ? screen.imageActive : screen.image}
      />
      <Text style={[styles.text, focused ? {color: mainColor} : {}]}>
        {screen.text}
      </Text>
      {screen.value === 'Cart' && productCount !== 0 ? (
        <View style={styles.notification}>
          <Text style={styles.notificationText}>{productCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tubButton: {
    width: '33.3%',
    height: theme.space50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {marginTop: theme.space5},
  notification: {
    position: 'absolute',
    right: theme.aligned(39),
    top: theme.aligned(-5),
    width: theme.space20,
    height: theme.space20,
    backgroundColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.space18,
  },
  notificationText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default TabBarButton;
