import { View, Text, StyleSheet } from "react-native";

function MealsDetailedScreen({route}) {
    const mealId = route.params.mealId;
    return (
        <View>
            <Text>
                Meals Detailed Screen
            </Text>
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