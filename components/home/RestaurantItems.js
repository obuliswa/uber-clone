import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestraunts = [
    {
        name: "aaaa aa",
        //image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        image_url: require("../../assets/images/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.png"),
        categories: [{title:"Indian"}],
        price: "$$",
        reviews: 124,
        rating: 4.5,
    },
    {
        name: "bbbb bbb",
        //image_url: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
         image_url: require("../../assets/images/res1.jpg"),
        categories: [{title: "Comfort Food"}],
        price: "$$",
        reviews: 234,
        rating: 3.9,
    },
    {
        name: "Indian kitchen",
        //image_url: "https://media.istockphoto.com/photos/view-through-the-window-of-staff-and-customers-inside-buns-and-buns-picture-id1178591496?k=20&m=1178591496&s=612x612&w=0&h=nn1Lw2C7zRSy-SKdrx79v7JqwgofYPcB1JIVlMZvPn0=",
        image_url: require("../../assets/images/res2.jpg"),
        categories: [{title: "Coffee"}],
        price: "$$",
        reviews: 1004,
        rating: 4.3,
    },
];


export default function RestaurantItems({navigation, ...props}) {
    return (
        <>
            {props.restaurantData.map((restraunt, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom:30}} onPress={() => navigation.navigate("RestaurantDetail", {
                    name: restraunt.name,
                    image: restraunt.image_url,
                    price: restraunt.price,
                    reviews: restraunt.reviews,
                    rating: restraunt.rating,
                    categories: restraunt.categories
                })} >
        <View key={index} style={{marginTop:10, padding:15, backgroundColor:"white"}}>
             <RestrauntImage image={restraunt.image_url} /> 
            <RestrauntInfo name={restraunt.name} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} reviews={restraunt.reviews} />
        </View>
        </TouchableOpacity>
        ))}
    </>
    )
}

const RestrauntImage = (props) => (
    <>
    <Image source={props.image}
    style={{width:"100%", height:180}}
    />
    <TouchableOpacity style={{position: "absolute", right:20,top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
)

const RestrauntInfo = (props) => (
    <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center", marginTop:10}}>
      <View>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: "gray"}}>30-45 ~ min</Text>
      </View>
      <View style={{backgroundColor:"#eee", height:30, width:30, alignItems:"center",justifyContent:"center", borderRadius:20}}>
        <Text>{props.rating}</Text>
      </View>
    </View>
)