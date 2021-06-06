import React from 'react'
import { StyleSheet, Button, View, TextInput } from 'react-native'
import { Formik } from 'formik'

export const FormComponent = ({ addInfo }) => {
  return (
    <View style={styles.inputContainer}>
      <Formik
        initialValues={{
          name: '', 
          comments: '', 
          product: ''
        }}
        onSubmit={(values, action) => {
          values.src = require('../assets/imgs/new.jpg')
          addInfo(values)
          action.resetForm()
        }}
      >
        {({ handleChange, handleSubmit, values }) => (          
          <View>
            <TextInput 
              placeholder='Название...'
              value={values.name}
              onChangeText={handleChange('name')}
              style={styles.input}
            />
            <TextInput 
              placeholder='Комментарии...'
              value={values.comments}
              onChangeText={handleChange('comments')}
              style={styles.input}
            />
            <TextInput 
              placeholder='О продукте...'
              value={values.product}
              multiline
              onChangeText={handleChange('product')}
              style={styles.input}
            />
            <Button 
              title='Добавить' 
              onPress={handleSubmit}
            />
          </View>
        )}

      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
    width: 250,
    fontSize: 17
  }
})