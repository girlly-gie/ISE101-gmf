
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/components/Header";
import WelcomeMessage from "../components/WelcomeMessage";
import Footer from "../components/Footer";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <WelcomeMessage />
            <View style={styles.body}>
                <Text style={styles.text}>
                    Welcome to your first screen!
                </Text>
                <Text style={styles.text}>
                    This is built using JSX and components.
                </Text>
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        marginVertical: 5,
    },
});
