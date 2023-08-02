import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import styles from '../config/styling/styles';

function Options() {
  return (
    <Modal style={[styles.h50]} visible={true} animationType="slide" onRequestClose={true}>
    <View style={style.modalContainer}>
      <View style={style.modalContent}>
        <Text style={[styles.textBlack]}>Hello</Text>
      </View>
    </View>
  </Modal>
);
};

const style = StyleSheet.create({
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
modalContent: {
  height: 300, // Set the desired height here
  width: '80%',
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 16,
},
});

export default Options;
