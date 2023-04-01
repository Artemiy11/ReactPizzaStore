import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';
import Catalog from './screens/catalog';
import Cart from './screens/cart';
import Profile from './screens/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LocalSvg} from 'react-native-svg';
import {mainColor} from './styles/styles';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Text from './components/text';
import {useState} from 'react';
import {reaction} from 'mobx';
import theme from './theme';

const Tab = createBottomTabNavigator();

const App = () => {
  const [productCount, setProductCount] = useState(0);
  const buttons = [
    {
      value: 'Catalog',
      component: Catalog,
      text: 'Меню',
      image: require('./assets/images/menu.svg'),
      imageActive: require('./assets/images/menu-active.svg'),
    },
    {
      value: 'Profile',
      component: Profile,
      text: 'Профиль',
      image: require('./assets/images/profile.svg'),
      imageActive: require('./assets/images/profile-active.svg'),
    },
    {
      value: 'Cart',
      component: Cart,
      text: 'Корзина',
      image: require('./assets/images/cart.svg'),
      imageActive: require('./assets/images/cart-active.svg'),
    },
  ];

  useState(() => {
    reaction(
      () => store.cart,
      () => setProductCount(store.countProducts()),
    );
  }, []);

  const TabBarButton = ({screen, accessibilityState, onPress}) => {
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

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {buttons.map((screen, key) => {
          return (
            <Tab.Screen
              key={key}
              name={screen.value}
              component={screen.component}
              options={{
                tabBarStyle: {
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: theme.aligned(100),
                  paddingTop: theme.space20,
                  paddingBottom: theme.space10,
                  zIndex: 0,
                },
                headerShown: false,
                tabBarButton: props => (
                  <TabBarButton {...props} screen={screen} />
                ),
                tabBarActiveTintColor: mainColor,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;
