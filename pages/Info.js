import React, { useState, useReducer } from 'react'
import { View, TouchableOpacity, StyleSheet, FlatList, Image, Modal, Text } from 'react-native'
import { icons, initialState, reducer } from '../static/data'
import { FormComponent } from '../components/FormComponent'

export const Info = ({ navigation }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [visibleModal, setVisibleModal] = useState(false)

  const { infoContainer, infoLink, infoIconAdd, modalTitleBlock, modalTitleText, modalIconBlock } = styles

  const handlerCloseModal = () => {
    setVisibleModal(false)
  }
  const handlerOpenModal = () => {
    setVisibleModal(true)
  }
  
  const addInfo = (values) => {
    console.log('add info: ', values)
    dispatch({type: 'add', payload: values})
  }

  return (
    <View style={infoContainer}>
      <Modal visible={visibleModal}>
        <TouchableOpacity style={modalIconBlock} onPress={handlerCloseModal}>
          <Image
            style={{
              resizeMode: "contain",
              height: 35,
            }} 
            source={icons.srcClose}
          />
        </TouchableOpacity>
        <View style={modalTitleBlock}>
          <Text style={modalTitleText}>Форма добавления</Text>
          <FormComponent addInfo={addInfo}/>
        </View>
      </Modal>
      <TouchableOpacity style={infoIconAdd} onPress={handlerOpenModal}>
        <Image
          style={{
            resizeMode: "contain",
            height: 35,
          }} 
          source={icons.srcAdd} 
        />
      </TouchableOpacity>
      <FlatList 
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('SubInfo', item)}
            style={infoLink}
          > 
            <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: 160
              }}
              source={item.src}             
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  infoLink: {
    margin: 5,
  },
  infoIconAdd: {
    marginBottom: 15
  },
  modalTitleBlock: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitleText: {
    fontSize: 21
  },
  modalIconBlock: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

