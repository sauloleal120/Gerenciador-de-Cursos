import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AppButton({
  title = 'string',
  type = 'string',
  onPress,
}) {
  const navigation = useNavigation();

  if (type === 'a') {
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'b') {
    return (
      <TouchableOpacity style={styles.button2} onPress={() => onPress()}>
        <Text style={styles.text2}>{title}</Text>
      </TouchableOpacity>
    );
  }

  if (type === 'c') {
    return (
      <TouchableOpacity style={styles.button2} onPress={() => onPress()}>
        <Text style={styles.text2}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e3562a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },

  button2: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text2: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
