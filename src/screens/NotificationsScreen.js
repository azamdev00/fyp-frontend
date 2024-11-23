import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Sound from 'react-native-sound';
const NotificationsScreen = ({navigation, route}) => {
  console.log('upper', route.params);

  const [isPlaying, setPlaying] = useState(route.params ? true : false);

  useEffect(() => {
    let sound = null;

    if (isPlaying) {
      console.log('hi');
      sound = new Sound('ringtone.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Failed to load the sound', error, sound);
          return;
        }
        navigation.navigate('Notifications');
        sound.play(() => {
          sound.release();
          setPlaying(false);
        });
      });
    }

    return () => {
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (route.params) {
      setPlaying(true);
    }
  }, [route.params]);
  const startBell = () => {
    setPlaying(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/notificationimg.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.SoundCard}>
          <Text style={styles.title}>Bell Of Life, Call Ambulance</Text>
          <View style={styles.BellNoti}>
            <Text style={styles.status}>
              Bell: {isPlaying ? 'Playing' : 'Not Playing'}
            </Text>
          </View>
        </View>
        <Text style={styles.instructions}>
          {/* Set state to true to play the Bell automatically */}
        </Text>
        {/* {!isPlaying && (
        // <Text style={styles.manualTrigger} onPress={startBell}>
        //   Trigger Bell
        // </Text>
      )} */}
        <View style={styles.UpperText}>
          <Text style={styles.LowerText}>
            {isPlaying
              ? `A fall is Detected for human!`
              : 'A fall will be Detected for human!'}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  SoundCard: {
    marginTop: 300,
    backgroundColor: '#079FEB',
    padding: 50,
    margin: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  status: {
    fontSize: 26,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#EB5406ed',
    padding: 10,
    borderRadius: 10,
  },
  BellNoti: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  DetectKeyword: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  LowerText: {
    fontSize: 22,
    fontWeight: 'bold',
    // marginLeft: 42,

    color: 'black',
  },
  UpperText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  manualTrigger: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
