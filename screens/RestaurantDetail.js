import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
    {
        title: "Lasagna",
        description: "type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients",
        price: "$16.20",
        image: require("../assets/images/lasanga.jpg")
    },
    {
        title: "Tandoori Chicken",
        description: "roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.",
        price: "$19.80",
        image: require("../assets/images/tandoori.jpg")
    },
    {
        title: "Chilaquiles",
        description: "Mexican dish consisting of strips or pieces of corn tortillas that are fried, then sautéed with green or red salsa, and topped with cheese, crema (a sweet, thin cream sauce), and onion.",
        price: "$13.10",
        image: require("../assets/images/chilaquiles.jpg")
    },
    {
        title: "Lasagna",
        description: "type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients",
        price: "$16.20",
        image: require("../assets/images/lasanga.jpg")
    },
    {
        title: "Tandoori Chicken",
        description: "roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour. It is named for the cylindrical clay oven in which it is cooked, a tandoor.",
        price: "$19.80",
        image: require("../assets/images/tandoori.jpg")
    },
    {
        title: "Chilaquiles",
        description: "Mexican dish consisting of strips or pieces of corn tortillas that are fried, then sautéed with green or red salsa, and topped with cheese, crema (a sweet, thin cream sauce), and onion.",
        price: "$13.10",
        image: require("../assets/images/chilaquiles.jpg")
    }
    ];
    

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }}  />
            <MenuItems restaurantName = {route.params.name} foods={foods}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}
