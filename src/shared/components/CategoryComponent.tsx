import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useCategoryStore} from '../../Stores/CategoryStore'

export default function CategoryComponent({data}) {
  const {activeCategories, addActiveCategory, removeActiveCategory} =
    useCategoryStore();

  const isActive = activeCategories.some(cat => cat.key === data.key);

  const handlePress = () => {
    if (isActive) {
      removeActiveCategory(data.key);
      
    } else {
      addActiveCategory(data);
      

    }

    console.log(activeCategories);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={isActive ? styles.categoryItems2 : styles.categoryItems}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItems: {
    fontSize: 15,
    marginTop: 10,
    margin: 10,
    backgroundColor: '#65aaea',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    color: '#fff',
  },
  categoryItems2: {
    fontSize: 15,
    marginTop: 10,
    margin: 10,
    backgroundColor: '#007BFF',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    color: '#fff',
  },
});
