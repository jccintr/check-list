import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { cores } from '../globalStyle'
import { FontAwesome } from '@expo/vector-icons'; 


const Header = ({onAddButtonPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>MyList</Text>
      <TouchableOpacity onPress={onAddButtonPress}>
         <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
container: {
  height: 50,
  width: '100%',
  backgroundColor: cores.azul,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
},
titleText:{
  color: cores.branco,
  fontSize: 20,
  fontWeight: 'bold',
}
    
})