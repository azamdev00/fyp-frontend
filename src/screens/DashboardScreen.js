import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = ({navigation, formData}) => {
  const handleAddPress = async () => {
    // connection is established
    // try {
    //   const response = await axios.post('https://httpbin.org/post', {
    //     name: 'true',
    //   });
    //   // console.log('Response:', response.data.json.name);
    //   let jsondata = response.data.json.name;
    //   console.log(jsondata);
    //   navigation.navigate('Notifications', {jsondata});
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    // const data = {
    //   name: 'khan',
    // };
    // try {
    //   const response = await fetch('http://localhost:8081', {
    //     method: 'POST',
    //     // data: '1',
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     },
    //     body: JSON.stringify(data), // Send "1" as a string
    //   });
    //   const jsondata = await response.json();
    //   console.log(response);
    //   // Navigate to the 'Add' screen if needed

    let data = true;
    if (data) {
      await new Promise(resolve => {
        Alert.alert(
          'Success',
          'We cannot connect you to the server. Please reload the server and try again!',
          [{text: 'OK', onPress: resolve}],
          {cancelable: false},
        );
      });
      console.log('after');
      navigation.navigate('Notifications', {data});
    } else {
      Alert.alert(
        'Please Try Again',
        'We cannot connect you to the server. Please reload the server and try again!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
    //  } catch (error) {
    //   console.log('Error:', error.message);
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundimg.jpg')}
        style={styles.backgroundImage}>
        <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={[styles.text, {color: 'black'}]}>Welcome, OnBoard</Text>
      </ImageBackground>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'stretch',
    borderRadius: 20,
  },
  addButton: {
    position: 'absolute',
    position: 'absolute',
    right: 5,
    top: '60%',
    right: 150,
    zIndex: 1,
    backgroundColor: '#0c077d',
    borderRadius: 10,
    padding: 20,
    paddingRight: 50,
    paddingLeft: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 44,
  },
});
