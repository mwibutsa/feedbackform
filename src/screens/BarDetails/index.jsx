import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../colors';
import { useState } from 'react';
import useGlobalContext from '../../hooks/globalContext';

const BarDetails = () => {
  const {
    params: { bar },
  } = useRoute();
  const navigation = useNavigation();
  const { addFeedback } = useGlobalContext();
  const [form, setForm] = useState({
    name: '',
    email: '',
    feedBack: '',
    // rating: '',
  });

  const valueChangeHandler = (name) => (value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const subMitHandler = () => {
    console.log('form', form);
    if (Object.values(form).some((value) => value.trim().length === 0)) {
      Alert.alert('Help us to improve', 'We are begging you. Just one Word.', [
        {
          text: "I am Bad & I don't care",
          onPress: navigation.goBack,
          style: 'cancel',
        },
        {
          text: 'Ok, I am good person',
          onPress: () => {},
        },
      ]);
    } else {
      addFeedback(form, bar);
      setForm({
        name: '',
        email: '',
        feedBack: '',
      });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.barDetails}>
        <Text style={styles.barName}>{bar.name}</Text>
        <Image style={styles.image} source={{ uri: bar.image }} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>
          Don't Just Drink! Help Us To Improve
        </Text>

        <TextInput
          onChangeText={valueChangeHandler('name')}
          style={styles.input}
          placeholder='Full name'
          value={form.name}
        />
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          placeholder='email'
          onChangeText={valueChangeHandler('email')}
          value={form.email}
        />
        <TextInput
          placeholder='How can we improve our services ?'
          multiline
          numberOfLines={5}
          style={styles.feedBackBox}
          textAlignVertical='top'
          onChangeText={valueChangeHandler('feedBack')}
          value={form.feedBack}
        />
        {/* <Button color='#841584' style={styles.button} title='Submit' /> */}
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={subMitHandler} style={styles.button}>
          <Text style={styles.btnLabel}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barName: {
    color: '#333',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 50,
    flex: 1,
  },
  barDetails: {
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 150,
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.borderColor,
  },
  feedBackBox: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    minHeight: 100,
    maxHeight: 200,
    paddingTop: 15,
    borderColor: colors.borderColor,
  },
  button: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: colors.buttonColor,

    // IOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 15,

    // Android

    elevation: 5,
  },
  btnLabel: {
    color: colors.borderColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  formTitle: {
    fontWeight: 'bold',
    color: colors.borderColor,
    marginBottom: 20,
    fontSize: 20,
  },
});

export default BarDetails;
