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
import {useNavigation} from '@react-navigation/native';
import {LocalSvg} from 'react-native-svg';
import {store} from '../../store';

const SearchButton = ({setSearching, search = ''}) => {
  store.updatePizzaFilter(search);
  console.log(store.filterPizzas);
  return (
    <TouchableOpacity onPress={() => setSearching(state => !state)}>
      <LocalSvg
        width={30}
        height={30}
        asset={require('../../images/search.svg')}
      />
    </TouchableOpacity>
  );
};

const Header = () => {
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState('');
  const windowWidth = Dimensions.get('window').width * 0.9;
  if (searching) {
    return (
      <View style={[styles.header, {width: windowWidth}]}>
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
    <View style={[styles.header, {width: windowWidth}]}>
      <Image source={require('../../images/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>React PIZZA</Text>
      <SearchButton setSearching={setSearching} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#7B7B7B',
  },
  textInput: {
    width: '85%',
    height: 30,
    borderColor: '#3F3F3F',
    borderWidth: 2,
    borderRadius: 15,
    paddingLeft: 12,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default Header;
