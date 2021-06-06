import React, { useState } from 'react'
import { StyleSheet, TextInput, Button } from 'react-native'
import { TodoList } from './TodoList'
import uuidv4 from 'uuidv4'

export const Todo = ({ navigation }) => {

  const [todoItems, setTodoItems] = useState([
    {id: uuidv4(), title: 'Задача 1', isCompleted: true },
    {id: uuidv4(), title: 'Задача 2', isCompleted: false }
  ])

  const [text, setText] = useState('')

  const changeText = text => setText(text)

  const addTodoItem = () => {
    if (text.length > 0) {
      setTodoItems([
        ...todoItems,
        {
          id: uuidv4(), title: text, isCompleted: false
        }
      ])
    }
    setText('')
  }

  const completeTodoItem = id => setTodoItems(todoItems.map(
    item => item.id === id 
      ? {...item, isCompleted: !item.isCompleted}
      : item
  ))

  const removeTodoItem = id => setTodoItems(
    todoItems.filter(item => item.id !== id)
  )

  const hendlerHistory = () => {
    navigation.navigate('Info')
  }

  return (
    <>
      <TodoList
        todoItems={todoItems} 
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
      />
   
      <TextInput
        style={styles.textInput}
        placeholder="Добавить задачу..."
        value={text}
        onChangeText={changeText}
        onSubmitEditing={addTodoItem}
      />

      <Button title="Информация" onPress={hendlerHistory} />
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 7
  }
})