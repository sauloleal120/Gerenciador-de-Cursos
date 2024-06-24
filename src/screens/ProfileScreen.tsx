import * as React from 'react';
import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function ProfileScreen({route}) {
  const [image, setImage] = useState(
    'https://drive.google.com/uc?export=view&id=16GY9za1ob4hlWWvi97pIfon7Wz5Z7VBO',
  );

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker}>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('YourCourses')}>
            <Text style={styles.primaryText}> Your Courses </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SavedCourses')}>
            <Text style={styles.primaryText}> Saved </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.secondaryText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  imageContainer: {
    position: 'absolute',
    top: 130,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#6a9fe7',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3b3a36',
    position: 'absolute',
    top: 40,
    marginBottom: 10,
  },
  mainTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

    top: 45,
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#3b3a36',
  },

  secondaryText: {
    color: 'gray',
    fontWeight: 'bold',
  },

  button: {
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 80,
    width: '170%',
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
