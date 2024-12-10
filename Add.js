import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { tasks } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

const Add = ({ navigation }) => {
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(null); // Default to null (not selected)

    return (
        <View style={styles.container}>
            <View style={{ paddingBottom: 10 }}>
                <Text style={styles.label}>Task Description:</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter task description"
                />
            </View>

            <View style={{ paddingBottom: 10 }}>
                <Text style={styles.label}>Completion Status:</Text>
                <RNPickerSelect
                    value={completed}
                    onValueChange={(value) => setCompleted(value)}
                    items={[
                        { label: "Completed", value: true },
                        { label: "Not Completed", value: false },
                    ]}
                />
            </View>

            <Button
                title="Submit"
                onPress={() => {
                    const task = { description, completion: completed };
                    tasks.push(task); // Add to the task list
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Add;
