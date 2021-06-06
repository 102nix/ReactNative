export const icons = { srcAdd: require('../assets/pngs/add.png'), srcClose: require('../assets/pngs/close.png') }

export const initialState = [
  { name: 'React', comments: 'JS library', product: 'By FaceBook', src: require('../assets/imgs/react.png')},
  { name: 'React-Native', comments: 'JS library', product: 'By FaceBook', src: require('../assets/imgs/react-native.png') },
  { name: 'Expo', comments: 'FW over React-native', product: 'By EXPO-lab', src: require('../assets/imgs/expo.png') },
]

export function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}