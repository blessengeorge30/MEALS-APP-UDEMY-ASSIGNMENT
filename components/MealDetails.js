import { View, Text,StyleSheet } from "react-native";


function MealDetails({duration,complexity,affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailitems, textStyle ]}>{duration}m</Text>
            <Text style={[styles.detailitems, textStyle ]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailitems, textStyle ]}>{affordability.toUpperCase()}</Text>
        </View>
    );


}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    detailitems: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});
