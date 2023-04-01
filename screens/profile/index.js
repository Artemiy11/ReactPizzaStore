import React, {useEffect, useState} from 'react';
import Text from '../../components/text';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Menu from '../../components/menu/Menu';
import {LocalSvg} from 'react-native-svg';
import theme from '../../theme';
import {Button} from '../../components/button';
import {mainColor} from '../../styles/styles';
import {store} from '../../store';

const DataItem = ({isEditing, type, value, name, editField}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>{name}</Text>
      <TextInput
        editable={isEditing}
        style={styles.input}
        value={value}
        onChangeText={text => editField(type, text)}
      />
    </View>
  );
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [data, setData] = useState({
    firstName: {value: 'James', name: 'Имя'},
    lastName: {value: 'Johnson', name: 'Фамилия'},
    phone: {value: '+79073436787', name: 'Номер телефона'},
    email: {value: 'kartemiy678@gmail.com', name: 'Email'},
    birthDate: {value: '13.12.2002', name: 'День рождения'},
    address: {value: '307 Morar Ways Suite 205', name: 'Адрес'},
  });

  function editField(type, value) {
    setData({...data, [type]: {...data[type], value: value}});
  }

  useEffect(() => {
    if (!isEditing) {
      store.updateUserData({
        firstName: data.firstName.value,
        lastName: data.lastName.value,
        phone: data.phone.value,
        email: data.email.value,
        birthDate: data.birthDate.value,
        address: data.address.value,
      });
      console.log(store.userData);
    }
  }, [isEditing, data]);

  return (
    <SafeAreaView style={styles.screenColor}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/user-profile-icon.png')}
        />
        {Object.keys(data).map(type => {
          const {value, name} = data[type];

          return (
            <DataItem
              value={value}
              name={name}
              type={type}
              isEditing={isEditing}
              editField={editField}
            />
          );
        })}

        <View style={styles.footer}>
          <Button
            onPress={() => setIsEditing(prevState => !prevState)}
            style={styles.btn}>
            {isEditing ? 'Сохранить' : 'Изменить данные'}
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenColor: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    paddingTop: theme.space20,
    paddingHorizontal: theme.space20,
    paddingBottom: theme.space40,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: theme.aligned(200),
    height: theme.aligned(200),
  },
  title: {
    fontWeight: '500',
    fontSize: theme.fontSize20,
    alignSelf: 'center',
  },
  row: {
    marginTop: theme.space16,
    width: '100%',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  rowText: {
    fontWeight: '600',
    marginLeft: theme.space5,
    height: theme.space30,
    fontSize: theme.fontSize17,
  },
  footer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: theme.space40,
  },
  btn: {
    marginTop: theme.space20,
    width: theme.aligned(270),
    height: theme.space50,
  },
  input: {
    padding: theme.space10,
    height: theme.space50,
    fontSize: theme.fontSize17,
    borderColor: mainColor,
    borderWidth: 1.5,
    borderRadius: theme.space20,
    // padding: theme.space10,
  },
});

export default Profile;
