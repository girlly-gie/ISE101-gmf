import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Student Task & Blog App</Text>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: "#68c2ff",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
