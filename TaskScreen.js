import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
} from "react-native";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TaskScreen() {
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);

const addTask = () => {
    if (task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask("");
    }
};

const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
};

return (
    <View style={styles.container}>
        <Header />
        <View style={styles.body}>
            <Text style={styles.title}>Task Manager</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a new task"
                value={task}
                onChangeText={setTask}
            />

            <Button title="Add Task" onPress={addTask} />
            <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TaskItem task={item} onDelete={() => deleteTask(index)} />
            )}
            />
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
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});