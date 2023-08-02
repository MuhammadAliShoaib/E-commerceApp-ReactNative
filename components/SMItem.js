import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import styles from '../config/styling/styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../config/redux/reducer/wishSlice';

function SMItem(props) {
    
    const dispatch = useDispatch()

    const [color,setColor] = useState("#000000")
    const [name,setName] = useState("favorite-border")

    let change = (item)=>{
        setColor('red')
        setName("favorite")
        dispatch(addToWishList(item))
    }


    return (
    <TouchableOpacity style={style.card} onPress={props.onPress}>
      <View
        key={props.item.id}
        style={[styles.flexRow, styles.my1, styles.px1]}>
        <View style={[styles.bgWhite]}>
          <Image
            source={{uri: props.item.image}}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={[styles.justifyContentCenter, {width: '90%'}]}>
          <Text
            style={[
              styles.textBlack,
              styles.mx1,
              styles.textBold,
              {width: '60%'},
            ]}>
            {props.item.title}
          </Text>
          <Text
            style={[
              styles.textSuccess,
              styles.mx1,
              styles.textBold,
              {width: '60%'},
            ]}>
            ${props.item.price}
          </Text>
          <View
            style={[
              styles.flexRow,
              styles.justifyContentBetween,
              {width: 200},
            ]}>
            <View style={[{width: 50}, styles.flexRow]}>
              <Text
                style={[
                  styles.ms1,
                  styles.textBold,
                  {width: '60%', color: 'orange'},
                ]}>
                {props.item.rating.rate}
              </Text>
              <Icon name="star" color="orange" size={18} />
            </View>
            <TouchableOpacity onPress={()=>change(props.item)}>
              <Icon name={name} color={color} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
  },
});

export default SMItem;
