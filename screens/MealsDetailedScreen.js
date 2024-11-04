import {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Mealdetail/Subtitle";
import List from "../components/Mealdetail/List";
import React from "react";
import IconButton from '../components/IconButton';

function MealsDetailedScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){
        console.log('Pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={{marginRight:15}}>
                      <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>     
                    </View>
                 
                )
            }
        });

    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootcontainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>steps</Subtitle>
                    <List data={selectedMeal.steps} />

                </View>
            </View>


        </ScrollView>
    )



}

export default MealsDetailedScreen;

const styles = StyleSheet.create({
rootcontainer:{
    marginBottom:2,

},
    container: {
        flex: 1,
        padding: 20,

    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 5,
        textAlign: 'center'
    },
    detailText: {
        color: "black"
    },
    listContainer: {
        width: '80%',

    },
    listOuterContainer:
    {
        alignItems:"center",
        marginBottom:30,
    }



});