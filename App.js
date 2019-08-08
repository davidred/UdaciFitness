import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import AddEntry from './components/AddEntry'
import History from './components/History'
import reducer from './reducers'


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        {/* <AddEntry /> */}
        <History />
      </View>
    </Provider>
  );
}
