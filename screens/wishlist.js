import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import styles from '../config/styling/styles';
import SMItem from '../components/SMItem';
import {useSelector} from 'react-redux';

function Wishlist() {
  const Favourites = useSelector(state => state.Wishlist);

  return (
    <View>
      <View style={[styles.p2, {marginBottom: 200}]}>
        <Text style={[styles.textBlack, styles.fs2, styles.mb1]}>
          My Favourites
        </Text>

        {Favourites.length==0?(
          <Text style={[styles.textBlack]}>No items in cart</Text>
        ) : (
          <FlatList
            data={Favourites}
            renderItem={({item}) => (
              <SMItem
                item={item}
                onPress={() => navigation.navigate('ProductDetails', item)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
    backgroundColor: 'white',
  },
});
export default Wishlist;
