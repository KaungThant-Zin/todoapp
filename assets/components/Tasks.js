import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Tasks = (props) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemsText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

export default Tasks
const styles = StyleSheet.create({
    items: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 2,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.2,
        backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 5,
    },
    itemsText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 3,
    }
})