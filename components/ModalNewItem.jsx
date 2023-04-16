import React from 'react'
import { StyleSheet, Text, View,Modal,TouchableOpacity,TextInput} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { cores } from '../globalStyle';


const ModalNewItem = ({modalVisible,setModalVisible,onAddItemPress,newItemText,setNewItemText}) => {
    
    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
          <View style={styles.modalArea}>
            <View style={styles.modalBody}>
                <TouchableOpacity style={styles.headerArea} onPress={()=>setModalVisible(false)}>
                    <Entypo name="chevron-down" size={34} color={cores.azul} />
                    <Text style={styles.modalTitleText}>Novo Item</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                    <View style={styles.inputArea}>
                        <TextInput style={styles.input}
                                placeholder="Novo item..."
                                value={newItemText}
                                onChangeText={t=>setNewItemText(t)}
                            
                                placeholderTextColor="#c1c1c1" 
                            />
                    </View>
                        <TouchableOpacity onPress={()=>onAddItemPress(newItemText)} style={[styles.addButton,newItemText.length===0?styles.addButtomDisabled:'']}>
                            <Text style={styles.addButtonText}>ADICIONAR ITEM</Text>
                        </TouchableOpacity>
                </View>
            </View>
                
          </View>
        </Modal>
      )
    }




export default ModalNewItem

const styles = StyleSheet.create({

  modalArea:{
      flex:1,
      justifyContent:'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      },
  modalBody:{
      width: '100%',
      height: 200,
      backgroundColor: '#fff',
      borderTopLeftRadius:10,
      borderTopRightRadius: 10,
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',  
      justifyContent: 'flex-start',  
      
  },
  content:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'space-between',
   
  },
  headerArea:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  modalTitleText:{
      fontWeight: 'bold',
      fontSize: 18,
      color: cores.azul,
  },
  inputArea: {
    width: '98%',
    height: 50,
    flexDirection: 'row',
    borderColor: cores.azul,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 10,
  },

input: {
  flex: 1,
  fontSize: 16,
  paddingHorizontal: 4,
  color: '#000',
  marginLeft: 10,
  
},
  addButton:{
    backgroundColor: cores.azul,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    height:50,
    width: '100%',
    marginBottom: 10,
    
},
addButtomDisabled:{
    backgroundColor: '#a1a1a1',
},
addButtonText:{
    color: '#fff',
    fontSize: 17,
    fontWeight:'bold',
 },
  
  })