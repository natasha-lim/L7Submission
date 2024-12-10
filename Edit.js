import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { tasks } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    information: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: 20,
        marginBottom: 10,
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        justifyContent: 'space-between',

    },
});

const Edit = ({ navigation, route }) => {
    const { index } = route.params;
    const [completed, setCompleted] = useState(route.params.completion);

    return (
        <View style={styles.container}>
            <Text style={styles.information}>Task Information</Text>
            <Text style={styles.label}>Task: {route.params.description}</Text>
            <Text style={styles.label}>
                Status: {completed ? "Completed" : "Not Completed"}
            </Text>

            <View style={styles.button}>
                <Button
                    title={completed ? "Mark as Incomplete" : "Mark as Complete"}
                    onPress={() => setCompleted(!completed)}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title="Save"
                    onPress={() => {
                        tasks[index].completion = completed; // Update task status
                        navigation.navigate("Home");
                    }}
                    style={styles.button}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title="Delete"
                    onPress={() => {
                        Alert.alert("Are you sure?", "", [
                            {
                                text: "Yes",
                                onPress: () => {
                                    tasks.splice(index, 1); // Remove the task
                                    navigation.navigate("Home");
                                },
                            },
                            { text: "No" },
                        ]);
                    }}
                    style={styles.button}
                />
            </View>
        </View>
    );
};

export default Edit;
