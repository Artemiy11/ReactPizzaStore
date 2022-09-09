import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import store from './store';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import AllPizzas from './screens/allPizzas';
import Header from './components/header';
import Cart from './screens/cart';

const Stack = createNativeStackNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  const addPizza = pizza => {
    setCart(prevState => {
      return [...prevState, pizza];
    });
  };

  const Delete = (id = false) => {
    if (id === false) {
      setCart([]);
    } else {
      setCart(prevState => {
        const idx = prevState.findIndex(item => item.id === id);
        return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
      });
      console.log(id);
    }
  };

  const ChangeAmount = (id, num) => {
    const idx = cart.findIndex(item => item.id === id);
    if (cart[idx].amount + num < 1) {
      Delete(id);
    } else {
      setCart(prevState => {
        const newItem = prevState[idx];
        newItem.amount += num;
        return [
          ...prevState.slice(0, idx),
          newItem,
          ...prevState.slice(idx + 1),
        ];
      });
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllPizzas"
            children={() => <AllPizzas data={cart} onAdding={addPizza} />}
            options={{
              headerTitle: props => <Header {...props} navName="Cart" />,
            }}
          />
          <Stack.Screen
            name="Cart"
            children={() => (
              <Cart data={cart} Delete={Delete} ChangeAmount={ChangeAmount} />
            )}
            options={{
              headerTitle: props => <Header {...props} navName="AllPizzas" />,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});

export default App;
