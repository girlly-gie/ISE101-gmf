import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Hello, Im Girlly!</Text>
            <Text style={styles.subtitle}>BSIS-3A </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10
    },

    subtitle: {
       fontSize: 16,
       color: "#555"
   }
});