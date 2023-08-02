import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../config/styling/styles';

const DialogBox = ({ visible,gallery,camera, onClose, title, message }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={style.modalContainer}>
        <View style={style.dialogContainer}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.message}>{message}</Text>
          <TouchableOpacity onPress={camera} style={[styles.bgSuccess,styles.p1,styles.rounded,styles.my1]}>
            <Text style={[styles.textCenter,styles.textWhite,styles.textBold]}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={gallery} style={[styles.bgSuccess,styles.p1,styles.rounded,styles.my1]}>
            <Text style={[styles.textCenter,styles.textWhite,styles.textBold]}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={onClose}>
            <Text style={style.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
    color:'black'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DialogBox;
