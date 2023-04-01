import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Text from '../text';
// import {useIsFocused, useNavigation} from '@react-navigation/native';
import {LocalSvg} from 'react-native-svg';
import {store} from '../../store';
import theme from '../../theme';
// import {reaction} from 'mobx';

const SearchButton = ({setSearching, search = ''}) => {
  store.updateFilterText(search);
  return (
    <TouchableOpacity onPress={() => setSearching(state => !state)}>
      <LocalSvg
        width={30}
        height={30}
        asset={require('../../assets/images/search.svg')}
      />
    </TouchableOpacity>
  );
};

const Header = () => {
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState('');
  const windowWidth = Dimensions.get('window').width * 0.9;
  // const isFocused = useIsFocused();

  // reaction(
  //   () => store.filterPizzas,
  //   filterPizzas => {
  //     filterPizzas === '' ? setSearching(false) : setSearching(true);
  //   },
  // );

  if (searching) {
    return (
      <View style={[styles.header, {width: windowWidth, paddingHorizontal: 0}]}>
        <TextInput
          autoFocus={true}
          value={value}
          onChangeText={setValue}
          placeholder={'Пицца 4 сыра'}
          style={styles.textInput}
        />
        <SearchButton setSearching={setSearching} search={value} />
      </View>
    );
  }
  return (
    <View style={[styles.header, {width: '100%'}]}>
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>React PIZZA</Text>
      <SearchButton setSearching={setSearching} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: theme.space60,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.aligned(25),
    justifyContent: 'space-between',
    paddingVertical: theme.space10,
    // borderBottomColor: '#E1E1E1',
    // borderBottomWidth: 0.5,
  },
  title: {
    fontSize: theme.fontSize20,
    fontWeight: 'bold',
  },
  text: {
    color: '#7B7B7B',
  },
  textInput: {
    color: '#000',
    width: '85%',
    height: theme.space40,
    borderColor: '#3F3F3F',
    borderWidth: 2,
    borderRadius: theme.space16,
    paddingLeft: theme.space12,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default Header;
