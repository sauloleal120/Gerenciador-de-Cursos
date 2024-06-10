import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../shared/components/AppButton';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import SignupScreenImage from '../../assets/Images/SignupScreenImage.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MaterialIcons} from '@expo/vector-icons';
import {useUsuarios} from '../../src/Stores/UsuarioStore';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export function SignupScreen({route}) {
  const navigation = useNavigation();

  const usuario = useUsuarios(state => state.users);
  const addUsuario = useUsuarios(state => state.addUsuario);

  const clearUser = () => {
    //  setUsuario([])
    console.log(usuario);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  //useEffect(()=> alert( errors?.email?.message ), [ errors?.email ])
  //useEffect(()=> alert( errors?.password?.message ), [ errors?.password ])

  const onSubmit = (data: FormData) => {
    addUsuario(data?.name, data?.email, data?.password);
    navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#3b3a36" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <SignupScreenImage width={350} height={350} />
      </View>

      <View style={styles.inputContainerSignup}>
        <TouchableOpacity onPress={() => clearUser()}>
          <Text style={styles.primaryText}> Sign up </Text>
        </TouchableOpacity>
        <Text style={styles.secondaryText}>Create your account</Text>
        <Controller
          control={control}
          name={'name'}
          rules={{
            required: 'nome obrigatório',
          }}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          control={control}
          name={'email'}
          rules={{
            required: 'e-mail obrigatório',
          }}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          control={control}
          name={'password'}
          rules={{
            required: 'password obrigatório',
          }}
          render={({field: {value, onChange}}) => (
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
          )}
        />
      </View>

      <View style={styles.buttonsContainerSignup}>
        <AppButton onPress={handleSubmit(onSubmit)} title="Sign up" type="a" />
        <AppButton
          onPress={() => navigation.navigate('LoginScreen')}
          title="Log in"
          type="b"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupImage: {
    width: 250,
    height: 300,
  },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3b3a36',
    marginTop: 100,
    marginBottom: 10,
  },
  imageContainer: {
    position: 'absolute',
    top: 70,
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 45,
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },

  inputContainerSignup: {
    marginTop: 270,
    alignItems: 'center',
    width: '90%',
    marginBottom: -10,
  },
  secondaryText: {
    color: 'gray',
    fontWeight: 'bold',
  },

  buttonsContainerSignup: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },

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
});
