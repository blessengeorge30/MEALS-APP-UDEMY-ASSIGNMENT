import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: "black",
        borderBottomWidth: 1.5,
    },
});
