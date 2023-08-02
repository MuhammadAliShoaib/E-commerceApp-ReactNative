import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../config/styling/styles';
import SMInput from '../../components/SMInput';
import {useFormik} from 'formik';
import {signupValidation} from './formValid';
import {useContext} from 'react';
import UserContext from '../../store/userContext/userContext';

function Signup() {

  const ctx = useContext(UserContext);


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupValidation,
      onSubmit: values => {
        ctx.userLogin(values)
      },
    });

  return (
    <View style={[styles.p3]}>
      <Text style={[styles.textBlack, styles.fs1]}>Create Account</Text>
      <View style={[styles.my2]}>
        <View style={[styles.flexRow, styles.justifyContentBetween]}>
          <View>
            <SMInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder="Enter First Name"
              label="First Name"
              style={[style.inputs, {width: 150}]}
            />
            {errors.firstName && touched.firstName ? (
              <Text style={{fontSize: 11, color: 'red'}}>
                {errors.firstName}
              </Text>
            ) : null}
          </View>
          <View>
            <SMInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder="Enter Last Name"
              label="Last Name"
              style={[style.inputs, {width: 150}]}
            />
            {errors.lastName && touched.lastName ? (
              <Text style={{fontSize: 11, color: 'red'}}>
                {errors.lastName}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={[styles.mt2]}>
          <SMInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Enter Email"
            label="Email"
            ViewStyle={[styles.mt2]}
          />
          {errors.email && touched.email ? (
              <Text style={{fontSize:11,color:'red'}}>{errors.email}</Text>
            ) : null}
        </View>
        <View style={[styles.mt2]}>
          <Text style={style.labels}>Password</Text>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Enter Password"
            placeholderTextColor="#57595A"
            style={[style.inputs]}
            secureTextEntry
          />
          {errors.password && touched.password ? (
              <Text style={{fontSize: 11, color: 'red'}}>
                {errors.password}
              </Text>
            ) : null}
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[
            styles.p1,
            styles.textBold,
            {backgroundColor: '#CC1512'},
            styles.rounded,
            style.card,
            styles.m2,
          ]}>
          <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  labels: {
    color: 'black',
    fontSize: 15,
    marginBottom: 5,
  },
  inputs: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
    borderRadius: 10,
  },
});

export default Signup;
