import {Dimensions, StyleSheet} from 'react-native';

const containerStyle = StyleSheet.create({
  backgroundColor: '#fff',
  padding: 10,
  height: '100%',
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const mainColor = '#FE5F1E';

export {containerStyle, windowWidth, windowHeight, mainColor};
