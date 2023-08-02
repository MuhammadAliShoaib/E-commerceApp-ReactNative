import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import styles from '../config/styling/styles';
import {useEffect, useState} from 'react';
import axios from 'axios';
import SMItem from '../components/SMItem';

function Home({navigation}) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  let api = 'https://fakestoreapi.com/products';

  let getData = () => {
    setLoader(true);
    axios
      .get(api)
      .then(res => {
        setLoader(false);
        setProducts([...res.data]);
      })
      .catch(err => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <View
        style={[
          styles.bgWhite,
          {height: 60},
          style.header,
          styles.justifyContentCenter,
          styles.p1,
        ]}>
        <Text style={[styles.textBlack, styles.fs3]}>Home</Text>
      </View>
      <View style={[styles.p2,{marginBottom:200}]}>
        <Text style={[styles.textBlack, styles.fs2, styles.mb1]}>
          All Items
        </Text>

        {loader && <ActivityIndicator size={30} color={styles._black} />}
        {!loader && (
          <FlatList
            data={products}
            renderItem={({item}) => (
             <SMItem item={item} onPress={()=>navigation.navigate("ProductDetails",item)}/>
            )}
          />
        )}
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
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
  },
  header: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 5,
    backgroundColor: 'white',
  },
});

export default Home;
