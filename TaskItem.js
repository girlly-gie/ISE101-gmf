import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TaskItem({ task, onDelete }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{task}</Text>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}> </Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        marginVertical: 5,
        backgroundColor: "#e0f7fa",
        borderRadius: 8,
    },
    text:{
        fontSize: 16,
    },
    delete: {
        fontSize: 18,
        color: "red",
    },
});