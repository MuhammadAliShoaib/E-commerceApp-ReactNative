import {View, Text, Image, StyleSheet, Modal,TouchableOpacity,} from 'react-native';
import styles from '../config/styling/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GestureHandlerRootView,
  
} from 'react-native-gesture-handler';
import {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DialogBox from '../components/dialogBox';

function Profile() {
  const [imgUri, setImgUri] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyUW4SBni8aG-yrhj471NhuedjBoklkLNXsBwQBo7tQ&s',
  );

  const [showModal, setShowModal] = useState(false);

  let openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
    });
    setImgUri(result.assets[0].uri);
    setShowModal(false)
  };

  let openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    setImgUri(result.assets[0].uri);
    setShowModal(false)
  };


  let closeModal = () => {
    setShowModal(false);
  };

  return (
    <GestureHandlerRootView>
      <DialogBox visible={showModal} gallery={openGallery} camera={openCamera} onClose={closeModal} title="Modal" message="Showing Modal"/>
      <View style={[styles.alignItemsCenter]}>
        <View
          style={[
            styles.my3,
            {
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: 'white',
            },
            style.image,
          ]}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 75}}
            source={{uri: imgUri}}
          />
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={[
              {width: 50, height: 50, borderRadius: 25},
              styles.bgTransparent,
              styles.justifyContentCenter,
              style.camera,
            ]}>
            <Icon
              style={[styles.textCenter]}
              name="photo-camera"
              color="black"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  image: {
    position: 'relative',
  },
  camera: {
    bottom: 30,
    left: 100,
  },
});

export default Profile;
