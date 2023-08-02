import { StyleSheet, View } from "react-native";
import styles from "../config/styling/styles";

function SMCard(props){
    return(
        <View style={{...style.card,...props.style}}>{props.children}</View>
    )
}

const style = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.8,
        elevation:5,
        backgroundColor:'white',
        borderRadius:10,
        margin:8
    }
})

export default SMCard;