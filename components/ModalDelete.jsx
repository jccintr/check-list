import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { cores} from '../globalStyle';


const ModalDelete = ({modalVisible,setModalVisible,id,onDelete}) => {
  



    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
          <View style={styles.modalArea}>
            <View style={styles.modalBody}>
                
                <View style={styles.content}>
                      <FontAwesome name="trash-o" size={50} color={cores.vermelho} />
                      <Text style={styles.confirmText}>Confirma a exclusão deste item ?</Text>
                      <TouchableOpacity onPress={()=>onDelete(id)} style={styles.deleteButton}>
                            <Text style={styles.buttonText}>EXCLUIR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>CANCELAR</Text>
                        </TouchableOpacity>
                </View>
            </View>
                
          </View>
        </Modal>
      )




}

export default ModalDelete

const styles = StyleSheet.create({

    modalArea:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        },
    modalBody:{
        width: '100%',
        height: 250,
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
    confirmText:{
       fontSize: 18,
       fontWeight: 'bold',
       marginTop: 20,
       marginBottom: 20,
    },
    deleteButton:{
        backgroundColor: cores.vermelho,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        height:50,
        width: '100%',
   },
  cancelButton:{
      backgroundColor: cores.azul,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 10,
      height:50,
      width: '100%',
      marginBottom: 10,
   },
   buttonText:{
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold',
   },
    
 })

