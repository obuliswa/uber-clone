import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


// const foods = [
// {
//     title: "Lasagna",
//     description: "type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients",
//     price: "$16.20",
//     image: require("../../assets/images/lasanga.jpg")
// },
// {
//     title: "Tandoori Chicken",
//     description: "roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.",
//     price: "$19.80",
//     image: require("../../assets/images/tandoori.jpg")
// },
// {
//     title: "Chilaquiles",
//     description: "Mexican dish consisting of strips or pieces of corn tortillas that are fried, then sautéed with green or red salsa, and topped with cheese, crema (a sweet, thin cream sauce), and onion.",
//     price: "$13.10",
//     image: require("../../assets/images/chilaquiles.jpg")
// },
// {
//     title: "Lasagna",
//     description: "type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients",
//     price: "$16.20",
//     image: require("../../assets/images/lasanga.jpg")
// },
// {
//     title: "Tandoori Chicken",
//     description: "roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.",
//     price: "$19.80",
//     image: require("../../assets/images/tandoori.jpg")
// },
// {
//     title: "Chilaquiles",
//     description: "Mexican dish consisting of strips or pieces of corn tortillas that are fried, then sautéed with green or red salsa, and topped with cheese, crema (a sweet, thin cream sauce), and onion.",
//     price: "$13.10",
//     image: require("../../assets/images/chilaquiles.jpg")
// }
// ];



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    titleStyle : {
        fontSize:19,
        fontWeight:"600"
    }
});


export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
    dispatch({
        type: "ADD_TO_CART",
        payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
    });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => 
        Boolean(cartItems.find((item) => item.title === food.title));
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => 
    <View key={index}>
        <View style={styles.menuItemStyle}>
           {hideCheckbox ? ( <> </>) : ( <BouncyCheckbox iconStyle={{borderColor: "lightgray", borderRadius:0}} fillColor= "green" isChecked={isFoodInCart(food, cartItems)} onPress={(checkboxValue) => selectItem(food, checkboxValue)}  />)}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft: 0} />
        </View>
        <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
    </View>
    
    )}
    </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = ({marginLeft,...props}) => (
    <View>
        <Image source = {props.food.image} style={{width:100, height: 100, borderRadius: 8, marginLeft: marginLeft}} />
    </View>
)
