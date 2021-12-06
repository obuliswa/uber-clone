import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestraunts } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'


export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestraunts);

//     const getRestaurants = () => {
//         fetch("https://worldwide-restaurants.p.rapidapi.com/detail", {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/x-www-form-urlencoded",
//             "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
//             "x-rapidapi-key": "6e516d9421mshfde7c32508ab41bp1ae1bfjsn94a7d366c5d9"
//         },
// })
// .then(response => {
// 	console.log(response.json());
// })
//     }

//     useEffect(() => {
//         getRestaurants();
//     },[]);

    return (
        <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
            <View style={{backgroundColor:"white", padding:15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData = {restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}
