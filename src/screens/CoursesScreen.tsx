import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import NoResultImage from '../../assets/Images/CourseNotFound.svg';
import {useCategoryStore} from '../../src/Stores/CategoryStore';
import {useCoursesStore} from '../../src/Stores/CursosStore';
import CategoryComponent from '../shared/components/CategoryComponent';
import { tags } from 'react-native-svg/lib/typescript/xml';
type FormData = {
  searchCourse: string;
};

export function CoursesScreen({route}) {
  const {control, handleSubmit} = useForm<FormData>();

  const {usuarioAtual} = route.params;

  const onSubmit = (data: FormData) => {
    setInput(data.searchCourse);
  };

  const [input, setInput] = useState('');

  const categories = useCategoryStore(state => state.categories);

  const courses = useCoursesStore(state => state.coursesStore);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.greeting}> Hello, </Text>

      <View style={styles.nameContainer}>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text style={styles.name}> {usuarioAtual} </Text>
        </TouchableOpacity>
        <MaterialCommunityIcons
          style={styles.bell}
          name="bell-ring-outline"
          size={40}
          color="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name={'searchCourse'}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Search course"
              style={styles.input}
              value={value}
              onChangeText={text => setInput(text)}
              autoCapitalize="none"
            />
          )}
        />

        <TouchableOpacity style={styles.lupa} onPress={handleSubmit(onSubmit)}>
          <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.category}> Category: </Text>
        <FlatList
          data={categories}
          horizontal={true}
          renderItem={({item}) => <CategoryComponent data={item} />}
        />
      </View>

      <ResultComponent data={courses} textInput={input} />

      <View style={styles.coursesListContainer}>
        <FlatList
          data={courses}
          renderItem={({item}) => (
            <CoursesListComponent data={item} textInput={input} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export function CoursesListComponent({data, textInput}) {
  const navigation = useNavigation();
  const activeCategories = useCategoryStore(state => state.activeCategories);
  const hasActiveCategory = data.tags.some(tag =>
    activeCategories.some(category => category.name === tag),
  );

  if (textInput == null) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CourseInfo', {
            name: data.name,
            about: data.about,
            duration: data.duration,
            brief: data.brief,
            price: data.price,
            tags: data.tags,
          });
        }}>
        <View style={styles.coursesCardContainer}>
          <Text style={styles.coursesDuration}> {data.duration} </Text>
          <Text style={styles.coursesTitle}> {data.name} </Text>
          <Text style={styles.coursesBrief}> {data.brief} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  if (
    data.name.toLowerCase().includes(textInput?.toLowerCase()) &&
    (activeCategories.length === 0 || hasActiveCategory)
  ) {
    // setResultCount('data.length')

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CourseInfo', {
            key: data.key,
            name: data.name,
            about: data.about,
            brief: data.brief,
            duration: data.duration,
            price: data.price,
            tags: data.tags,
          });
        }}>
        <View style={styles.coursesCardContainer}>
          <Text style={styles.coursesDuration}> {data.duration} </Text>
          <Text style={styles.coursesTitle}> {data.name} </Text>
          <Text style={styles.coursesBrief}> {data.brief} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export function ResultComponent({data, textInput}) {
  const novo = data.filter(item =>
    item.name?.toLowerCase().includes(textInput?.toLowerCase()),
  );

  if (textInput !== '' && novo.length === 0) {
    return (
      <View style={styles.resultComponent}>
        <Text style={styles.coursesTitle}>
          {' '}
          {textInput === ''
            ? null
            : novo.length === 1
            ? novo.length + ' Result'
            : novo.length + ' Results'}{' '}
        </Text>

        <NoResultImage width={350} height={350} />

        <Text style={styles.notFoundTitle}> Course not found </Text>
        <Text style={styles.notFoundText}>
          {' '}
          {`Try searching the course with 
    a different keyword`}{' '}
        </Text>
      </View>
    );
  }
  if (textInput !== '' && novo.length !== 0) {
    return (
      <View style={styles.resultComponent}>
        <Text style={styles.coursesTitle}>
          {' '}
          {novo.length == 1
            ? novo.length + ' Result'
            : novo.length + ' Results'}{' '}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },

  greeting: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20,
  },

  category: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  categoryItems: {
    fontSize: 15,
    marginTop: 10,
    margin: 10,
    backgroundColor: '#65aaea',
    borderRadius: 20,
    padding: 5,
    color: '#fff',
  },

  categoryContainer: {
    flexDirection: 'row',
  },

  nameContainer: {
    flexDirection: 'row',
  },

  name: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  bell: {
    marginTop: 15,
    marginLeft: 30,
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    height: 60,
    padding: 20,
    fontSize: 17,
    width: '100%',
  },

  lupa: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: '85%',
  },

  inputContainer: {
    flexDirection: 'row',
  },

  coursesCardContainer: {
    borderColor: 'gray',
    borderRadius: 15,
    borderWidth: 1,
    margin: 10,
    height: 100,
    justifyContent: 'center',
    padding: 10,
  },
  coursesTitle: {
    fontSize: 30,
  },
  coursesDuration: {
    fontSize: 20,
    color: '#61a496',
    marginTop: 10,
  },

  coursesBrief: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 5,
  },

  coursesListContainer: {
    height: 480,
  },

  resultComponent: {
    marginTop: 0,
    marginBottom: 0,
  },

  notFoundTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'gray',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -50,
  },
  notFoundText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'gray',
  },
});
