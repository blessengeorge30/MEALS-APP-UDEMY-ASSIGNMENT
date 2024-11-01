import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, Meal, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,


        }
        return <MealItem {...mealItemProps}  />

    }
    return (
        <View style={styles.container} >
            <FlatList  data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>

    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    }

});