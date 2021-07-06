import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, ImageBackground } from 'react-native';
import Tasks from './assets/components/Tasks';

export default function App() {
  const [task, setTask] = useState()
  const [taskitems, setTaskitems] = useState([])

  const addHandletasks = () => {
    Keyboard.dismiss()
    setTaskitems([...taskitems, task])
    setTask(null)
    // console.log(task)
  }
  const deletetask = (index) => {
    let itemcopy = [...taskitems]
    itemcopy.splice(index, 1)
    setTaskitems(itemcopy)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.png')} style={styles.image}>
      <View style={styles.textSpace}>
        <Text style={styles.textTitle}>Today's tasks</Text>
        <View style={styles.todoItems}>
          {
            taskitems.map(
              (item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => deletetask(index)}>
                    <Tasks   text={item}/>
                  </TouchableOpacity>
                )
              }
            )
          }
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.addtasks}>
        <TextInput style={styles.inputtext} placeholder="add a task" value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addHandletasks()}>
          <View style={styles.textplusicon}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  textSpace: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  todoItems: {
    paddingTop: 20,
  },
  addtasks: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center'
  },
  inputtext: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 2,
    width: 250,
    backgroundColor: "#fff",
  },
  textplusicon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {},
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  }
});
