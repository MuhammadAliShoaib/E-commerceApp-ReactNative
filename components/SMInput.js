import styles from '../config/styling/styles';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function SMInput(props) {
  return (
    <>
      <Text style={{...props.TextStyle, ...style.labels}}>{props.label}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.values}
        placeholderTextColor="#57595A"
        placeholder={props.placeholder}
        style={[style.inputs, props.style]}
      />
    </>
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
});

export default SMInput;
