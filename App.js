import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import store from './store';
import Catalog from './screens/catalog';
import Header from './components/header';
import Cart from './screens/cart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Catalog"
            component={Catalog}
            options={{
              headerTitle: props => <Header {...props} navName="Cart" />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerTitle: props => <Header {...props} navName="Catalog" />,
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
