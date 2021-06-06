import React from 'react'
import { FlatList } from 'react-native'
import { TodoItem } from '../pages/TodoItem'

export const TodoList = ({ todoItems, removeTodoItem, completeTodoItem }) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({ item }) => (
        <TodoItem
          title={item.title}
          isCompleted={item.isCompleted}
          complete={() => completeTodoItem(item.id)}
          remove={() => removeTodoItem(item.id)}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
  
  }