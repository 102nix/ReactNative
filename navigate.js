import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Todo } from './components/Todo'
import { Info } from './pages/Info'
import { SubInfo } from './pages/SubInfo'

const Stack = createStackNavigator()

export default function Navigator () {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Todo"
        component={Todo}
        options={{
          title: "Главная",
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff'
          },
        }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          title: 'Информация',
          headerStyle: {
            backgroundColor: 'grey'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            transform: [{ translateX: -40 }],
            textAlign: 'center',
            color: '#fff'
          }
        }}
      />
      <Stack.Screen 
        name="SubInfo"
        component={SubInfo}
        options={{
          title: 'Подробно',
          headerStyle: {
            backgroundColor: 'grey'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            transform: [{ translateX: -40 }],
            color: '#fff'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}
