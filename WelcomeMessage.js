
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello, Girlly Fernandez!
            </Text>
            <Text style={styles.text}>
                BSIS 3A
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        marginTop: 5,
    },
});
