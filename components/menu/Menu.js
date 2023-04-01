// import React from 'react';
// import Text from '../text';
// import {View, StyleSheet, SafeAreaView} from 'react-native';
// import MenuButton from './MenuButton';
// import theme from '../../theme';
// import Catalog from '../../screens/catalog';
// import Profile from '../../screens/profile';
// import Cart from '../../screens/cart';
// import TabBarButton from './MenuButton';

// const Menu = ({current}) => {
//   const buttons = [
//     {
//       value: 'Catalog',
//       component: Catalog,
//       text: 'Меню',
//       image: require('../../assets/images/menu.svg'),
//       imageActive: require('../../assets/images/menu-active.svg'),
//     },
//     {
//       value: 'Profile',
//       component: Profile,
//       text: 'Профиль',
//       image: require('../../assets/images/profile.svg'),
//       imageActive: require('../../assets/images/profile-active.svg'),
//     },
//     {
//       value: 'Cart',
//       component: Cart,
//       text: 'Корзина',
//       image: require('../../assets/images/cart.svg'),
//       imageActive: require('../../assets/images/cart-active.svg'),
//     },
//   ];

//   return (
//     <SafeAreaView>
//       {buttons.map((screen, key) => {
//         return (
//           <Tab.Screen
//             key={key}
//             name={screen.value}
//             component={screen.component}
//             options={{
//               tabBarStyle: {
//                 position: 'absolute',
//                 bottom: 0,
//                 width: '100%',
//                 height: theme.aligned(85),
//                 paddingTop: theme.space20,
//                 zIndex: 0,
//               },
//               headerShown: false,
//               tabBarButton: props => (
//                 <TabBarButton {...props} screen={screen} />
//               ),
//               tabBarActiveTintColor: mainColor,
//             }}
//           />
//         );
//       })}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'red',
//     paddingBottom: theme.space28,
//     // borderTopColor: '#DFDFDF',
//     // borderTopWidth: 1,
//     position: 'absolute',
//     bottom: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     height: 95,
//     width: '100%',
//     // backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
// });

// export default Menu;
