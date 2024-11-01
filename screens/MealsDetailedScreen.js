import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsDetailedScreen({ route }) {
    const mealId = route.params.mealId;

    const selectMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image />
            <Text> </Text>
            <View></View>
            <Text>
                Ingredients
            </Text>
            <Text>Steps</Text>
        </View>
    )



}

export default MealsDetailedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    }

});