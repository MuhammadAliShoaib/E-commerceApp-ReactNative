import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../config/styling/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {cartItems} from '../config/redux/reducer/cartSlice';

function ProductDetails({navigation, route}) {
  const params = route.params;

  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const cart = useSelector(state => state.cart);

  let totalItem = 0;
  let totalPrice = 0;

  cart.map(x => {
    totalItem += x.qty;
    totalPrice += x.price * x.qty;
  });
  
  totalPrice = totalPrice.toFixed(2)

  let decrement = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  };

  let increment = () => {
    setCounter(counter + 1);
  };

  let addToCart = () => {
    let obj = {
      ...params,
      qty: counter,
    };
    dispatch(cartItems(obj));
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={[styles.alignItemsCenter, styles.p1, {marginBottom: 60}]}>
          <View style={[styles.m2]}>
            <Image
              resizeMode="contain"
              source={{uri: params.image}}
              width={200}
              height={200}
            />
          </View>
          <View
            style={[
              styles.w100,
              styles.alignItemsStart,
              styles.bgWhite,
              styles.p1,
              styles.rounded,
            ]}>
            <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>
              {params.title}
            </Text>
            <Text
              style={[
                styles.textBlack,
                styles.fs5,
                styles.textBold,
                styles.my1,
              ]}>
              ${params.price}
            </Text>
            <View style={[styles.flexRow, styles.alignItemsCenter]}>
              <Icon name="star" color="orange" size={30} />
              <Text style={[styles.textBlack, styles.fs5, styles.mx1]}>
                {params.rating.rate}/5
              </Text>
            </View>
            <View style={[styles.my1]}>
              <Text style={[styles.textBlack, styles.textBold]}>
                Description :{' '}
              </Text>
              <Text style={[styles.textBlack]}>{params.description}</Text>
            </View>
            <View
              style={[
                styles.flexRow,
                styles.justifyContentBetween,
                styles.alignItemsCenter,
                styles.w100,
              ]}>
              <Text style={[styles.textBlack, styles.textBold, styles.fs3]}>
                Quantity :{' '}
              </Text>
              <View style={[styles.flexRow, styles.alignItemsCenter]}>
                <TouchableOpacity
                  onPress={decrement}
                  style={[
                    styles.mx1,
                    {
                      borderRadius: 7,
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      backgroundColor: '#CC1512',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textWhite,
                      styles.textBold,
                      styles.textCenter,
                    ]}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.textBlack, styles.fs5]}>{counter}</Text>
                <TouchableOpacity
                  onPress={increment}
                  style={[
                    styles.mx1,
                    {
                      borderRadius: 7,
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      backgroundColor: '#CC1512',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textWhite,
                      styles.textBold,
                      styles.textCenter,
                    ]}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.w100]}>
              <TouchableOpacity
                onPress={addToCart}
                style={[
                  styles.mx1,
                  {
                    borderRadius: 7,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    margin: 15,
                    backgroundColor: '#CC1512',
                  },
                ]}>
                <Text
                  style={[
                    styles.textWhite,
                    styles.textBold,
                    styles.textCenter,
                    styles.fs4,
                  ]}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
      onPress={()=>{navigation.navigate("Cart",totalPrice)}}
        style={[
          styles.bgWhite,
          styles.p1,
          styles.justifyContentCenter,
          {height: 60, width: '100%', position: 'absolute', bottom: 0},
        ]}>
        <View
          style={[
            styles.justifyContentAround,
            styles.alignItemsCenter,
            styles.flexRow,
            {
              backgroundColor: '#CC1512',
              height: 40,
              width: '100%',
              borderRadius: 10,
            },
          ]}>
          <View
            style={[
              {
                borderColor: 'white',
                height: 30,
                width: 30,
                borderWidth: 1,
                borderRadius: 15,
              },
            ]}>
            <Text
              style={[
                styles.textWhite,
                styles.textBold,
                styles.textCenter,
                styles.fs3,
              ]}>
              {totalItem}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textWhite,
                styles.textBold,
                styles.textCenter,
                styles.fs4,
              ]}>
              View Cart
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textWhite,
                styles.textBold,
                styles.textCenter,
                styles.fs4,
              ]}>
              ${totalPrice}/-
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ProductDetails;
