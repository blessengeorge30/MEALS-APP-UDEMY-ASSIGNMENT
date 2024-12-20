import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
    return (
        data.map((dataPoint) => (
            <View key={dataPoint} style={styles.ListItems}>
                <Text style={styles.itemText} >{dataPoint}</Text>
            </View>

        ))
    )
}
export default List;

const styles = StyleSheet.create({
    ListItems: {
       borderRadius:6,
       paddingHorizontal:8,
       paddingVertical:4,
       marginVertical:4,
       marginHorizontal:12,
       backgroundColor: 'white'
    },
    itemText: {
        color:'black',
        textAlign:'center',

    }
})