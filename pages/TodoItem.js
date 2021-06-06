import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const TodoItem = ({ title, isCompleted, complete, remove }) => {

  const { 
    container, 
    textContainer, 
    textComplete,
    button,
    buttonSuccess,
    buttonText,
    buttonDanger
  } = styles
  
  return (
    <View style={container}>
      <View style={textContainer}>
        <Text style={isCompleted && textComplete}>{title}</Text>
      </View>
      
      <View>
        <TouchableOpacity
          style={[button, buttonSuccess]}
          onPress={complete}
        >
          <Text style={buttonText}>
            {isCompleted ? 'Отменить' : 'Выполнить'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[button, buttonDanger]}
          onPress={remove}
        >
          <Text style={buttonText}>Удалить</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

TodoItem.defaultProps = {
  title: 'Без названия',
  isCompleted: false,
  complete: () => {},
  remove: () => {}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textContainer: {
    flex: 1
  },
  textComplete: {
    textDecorationLine: 'line-through'
  },
  button: {
    minWidth: 100,
    margin: 3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#007bff'
  },
  buttonSuccess: {
    backgroundColor: '#28a745'
  },
  buttonDanger: {
    backgroundColor: '#dc3545'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
})