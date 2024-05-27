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
import {MaterialIcons} from '@expo/vector-icons';
import {savedCoursesMock} from '../mocks/savedCoursesMock';
import NoResultImage from '../../assets/Images/CourseNotFound.svg';

type FormData = {
  searchCourse: string;
};

export function YourCourses({route}) {

    const {myCourses, setMyCourses} = route.params;
    const [cursosSalvos, setCursosSalvos] = useState(savedCoursesMock);
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setInput(data.searchCourse);
  };

  const [input, setInput] = useState('');

  const [categories, setCategories] = useState([
    {key: 1, name: '#CSS'},
    {key: 2, name: '#UX'},
    {key: 3, name: '#Swift'},
    {key: 4, name: '#UI'},
  ]);

  const [courses, setCourses] = useState([
   
  ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#3b3a36" />
        </TouchableOpacity>
        <Text style={styles.title}> Your Courses </Text>
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
          renderItem={({item}) => (
            <Text style={styles.categoryItems}> {item.name} </Text>
          )}
        />
      </View>

      <ResultComponent data={myCourses} textInput={input} />

      <View style={styles.coursesListContainer}>
        <FlatList
          data={myCourses}
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

  if (data.name.toLowerCase().includes(textInput?.toLowerCase())) {
    // setResultCount('data.length')

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CourseInfo', {
            name: data.name,
            about: data.about,
            duration: data.duration,
            brief: data.brief,
            price: data.price,
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

  if (textInput !== '' && novo.length == 0) {
    return (
      <View style={styles.resultComponent}>
        <Text style={styles.coursesTitle}>
          {' '}
          {textInput == ''
            ? null
            : novo.length == 1
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
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    margin: 30,
    fontWeight: 'bold',
    color: '#3b3a36',
  },
  backButton: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
