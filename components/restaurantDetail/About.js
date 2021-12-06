import React from 'react'
import { View, Text,Image } from 'react-native'

// const image = require("../../assets/images/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.png");
// const name = "Farmhouse Kitchen Thai Cuisine";


export default function About(props) {
    const {name, image, price, reviews, rating,categories} = props.route.params;
    const formatcat = categories.map((cat) => cat.title).join("");
    const description = `${formatcat} ${price ? " . " + price : ""}. * . ${rating} @# (${reviews})`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={props.image} style={{width:'100%', height:180}} />
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize:29,
        fontWeight:"600",
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:"400",
        fontSize:15.5
    }}>
        {props.description}
    </Text>
)
