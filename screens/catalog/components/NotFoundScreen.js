import React from 'react';
import Text from '../../../components/text';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {LocalSvg} from 'react-native-svg';
import {windowWidth} from '../../../styles/styles';
import theme from '../../../theme';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🔍</Text>
      <Text style={styles.text}>
        Хорошая попытка! Но такого нигде нет. Попробуете изменить запрос?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.aligned(80),
  },
  emoji: {
    fontSize: theme.aligned(150),
  },
  text: {
    marginTop: theme.space5,
    fontSize: theme.fontSize24,
    textAlign: 'center',
  },
});

export default NotFoundScreen;
