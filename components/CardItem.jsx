import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome,Fontisto } from '@expo/vector-icons'; 
import { cores } from '../globalStyle';

const CardItem = ({item,onDeleteItem,onCheckItem}) => {
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>onCheckItem(item.id)}>
            <Fontisto name={item.checked?'checkbox-active':"checkbox-passive"} size={20} color="black" />
        </TouchableOpacity>
        <Text style={item.checked?styles.itemChecked:styles.item}>{item.item}</Text>
        <TouchableOpacity onPress={()=>onDeleteItem(item.id)}>
            <FontAwesome name="trash-o" size={20} color={cores.vermelho} />
        </TouchableOpacity>
        
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({
container:{
   width: '100%',
   maxWidth: Dimensions.get('window').width,
   backgroundColor: cores.cinzaClaro,
   borderRadius: 10,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   height: 60,
   paddingHorizontal: 10,
   marginBottom: 2,
   marginTop: 2,
 },
item:{
    width: '80%',
},
itemChecked:{
    width: '80%',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
}

})