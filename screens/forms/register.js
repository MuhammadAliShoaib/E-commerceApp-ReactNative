import {Text, View, StyleSheet, Image} from 'react-native';
import styles from '../../config/styling/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Register({navigation}) {
    
  return (
    <View
      style={[
        styles.alignItemsCenter,
        styles.bgWhite,
        {flex: 1},
        styles.justifyContentCenter,
      ]}>
      <View>
        <Image source={require('../../Assets/Logo.png')}/>
      </View>
      <View style={[styles.m2, styles.flexRow]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={[
            styles.p1,
            styles.textBold,
            {backgroundColor: '#CC1512'},
            styles.rounded,
            styles.mx1,
            style.card,
          ]}>
          <Text style={[styles.textWhite, styles.fs3]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={[
            styles.p1,
            styles.textBold,
            {backgroundColor: '#CC1512'},
            styles.rounded,
            style.card,
          ]}>
          <Text style={[styles.textWhite, styles.fs3]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
    borderRadius: 10,
  },
});

export default Register;
