import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { tasks } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 20,
        marginTop:30
    },
    subtext: {
        fontsize: 20,
        textAlign: 'center',
        marginBottom: 25
    },

    item: {
        padding: 15,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        backgroundColor: 'white',
    },

    description: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 12,
        color: 'gray',
    }
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() =>
                navigation.navigate('Edit', {
                    index,
                    description: item.description,
                    completion: item.completion,
                })
            }
        >
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.status}>
                {item.completion ? "Completed" : "Not Completed"}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Task List</Text>
            <Text style={styles.subtext}>Manage your tasks here!</Text>
            <FlatList data={tasks} renderItem={renderItem} />
            <Button
                title="Add Task"
                onPress={() => navigation.navigate('Add')}
            />

            <View style={{marginTop: 20, marginBottom: 20}}>
                <Button
                    title="Overall Status"
                    onPress={() => {
                        const totalTasks = tasks.length;
                        const completedTasks = tasks.filter(task => task.completion).length;
                        const incompleteTasks = totalTasks - completedTasks;
                        const completionPercentage = ((completedTasks / totalTasks) * 100).toFixed(2);

                        Alert.alert(
                            "Overall Status",
                            `Completed: ${completedTasks}\nIncomplete: ${incompleteTasks}\nCompletion: ${completionPercentage}%`
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Home;
