import { StyleSheet,ScrollView,Dimensions } from 'react-native'
import React from 'react'
import CardItem from './CardItem'

const ListItem = ({items,onDeleteItem,onCheckItem}) => {
    const screenWidth = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center', marginHorizontal: 5,}} showsVerticalScrollIndicator={false}>
        {items.map((item)=><CardItem key={item.id} item={item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>)}
    </ScrollView>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    }
})