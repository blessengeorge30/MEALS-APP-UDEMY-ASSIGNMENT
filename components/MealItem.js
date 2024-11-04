import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
    Platform
} from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../components/MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
      navigation.navigate('MealsDetailedScreen', {
        mealId: id
    })   
    } 

   

    return <View style={styles.mealitems}>
        <Pressable android_ripple={{ color: "#ccc" }} 
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)} onPress={selectMealItemHandler}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
               <MealDetails 
               duration={duration} 
               affordability={affordability} 
               complexity={complexity}/>
            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    mealitems: {
        margin: 26,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visiable',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 20
    },
    image: {
        width: '100%',
        height: 200,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"

    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 8
    },
 
})