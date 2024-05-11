import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import Illustration from '../../assets/Images/Illustration.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppButton from '../shared/components/AppButton';

export function CourseInfo({route}) {
  const navigation = useNavigation();

  const {key, name, duration, brief, about, price, from} = route.params;
  const {savedCourses, setSavedCourses} = route.params;
  const {myCourses, setMyCourses} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#3b3a36" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}> {name} </Text>
      </View>

      <View style={styles.imageContainer}>
        <Illustration width={350} height={350} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}> $ {price} </Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.about}> About the course </Text>
      </View>

      <View style={styles.aboutTextContainer}>
        <Text style={styles.aboutText}> {about} </Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.about}> Duration </Text>
      </View>

      <View style={styles.aboutTextContainer}>
        <Text style={styles.aboutText}> {duration} </Text>
      </View>

      <View style={styles.addToCart}>
        <AppButton
          title={from !== 'savedCourses' ? 'Add to cart' : 'Buy!'}
          type="a"
          onPress={
            from !== 'savedCourses'
              ? () =>
                  setSavedCourses(savedCourses => [
                    ...savedCourses,
                    {
                      key: key,
                      name: name,
                      duration: duration,
                      brief: brief,
                      about: about,
                      price: price,
                    },
                  ])
              : () =>
                  setMyCourses(myCourses => [
                    ...myCourses,
                    {
                      key: key,
                      name: name,
                      duration: duration,
                      brief: brief,
                      about: about,
                      price: price,
                    },
                  ])
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    left: 25,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: -20,
  },

  imageContainer: {
    marginTop: -50,
  },

  aboutContainer: {
    textAlign: 'left',
    marginLeft: 10,
  },

  about: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  aboutTextContainer: {
    margin: 10,
    marginLeft: 20,
  },

  aboutText: {
    fontSize: 15,
  },

  addToCart: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  priceContainer: {
    backgroundColor: '#65aaea',
    width: 60,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 300,
  },

  price: {
    color: '#FFF',
  },
});
