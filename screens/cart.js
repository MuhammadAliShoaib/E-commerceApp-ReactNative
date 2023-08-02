import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  StyleSheet,
} from 'react-native';
import styles from '../config/styling/styles';

import {useSelector} from 'react-redux';
import SMItem from '../components/SMItem';

function Cart({navigation,route}) {
  const apiData = useSelector(state => state.cart);

  const totalPrice = route.params


  const renderItem = ({item}) => (
    <SMItem item={item}/>
  );

  const renderEmptyCart = () => (
    <Text style={[styles.textBlack]}>No items in cart</Text>
  );

  const renderSectionHeader = () => (
    <Text style={[styles.textBlack, styles.fs2, styles.mb1]}>My Cart</Text>
  );

  const renderFooter = () => (
    <View style={[styles.bgWhite, styles.p1, style.card]}>
      <View
        style={[
          styles.flexRow,
          styles.justifyContentBetween,
          styles.alignItemsCenter,
          {marginVertical: 5},
        ]}>
        <Text style={[styles.textBlack, styles.fs5]}>Total Items</Text>
        <Text style={[styles.textSecondary,styles.fs5]}>{apiData.length}</Text>
      </View>
      <View
        style={[
          styles.flexRow,
          styles.justifyContentBetween,
          styles.alignItemsCenter,
          {marginVertical: 5},
        ]}>
        <Text style={[styles.textBlack, styles.fs5]}>Delivery Fees</Text>
        <Text style={[styles.textSecondary,styles.fs5]}>$ 0.00</Text>
      </View>
      <View
        style={[
          styles.flexRow,
          styles.justifyContentBetween,
          styles.alignItemsCenter,
          {marginVertical: 5},
        ]}>
        <Text style={[styles.textBlack, styles.fs5]}>Discount</Text>
        <Text style={[styles.textSecondary,styles.fs5]}>$ 0.00</Text>
      </View>

      <View
        style={[
          styles.flexRow,
          styles.justifyContentBetween,
          styles.alignItemsCenter,
          {marginVertical: 5},
        ]}>
        <Text style={[styles.textBlack, styles.fs5, styles.textBold]}>
          Grand Total
        </Text>
        <Text style={[styles.textSecondary,styles.fs5,styles.textBold]}>${totalPrice}/-</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.mx1,
          {
            borderRadius: 7,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            margin: 10,
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
          Check out
        </Text>
      </TouchableOpacity>
    </View>
  );

  const sections = [{title: 'All Items', data: apiData}];

  return (
    <View style={[styles.p2]}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListEmptyComponent={renderEmptyCart}
        ListFooterComponent={renderFooter}
        keyExtractor={item => item.id.toString()}
      />
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
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
  },
});

export default Cart;
