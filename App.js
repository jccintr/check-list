
import { StyleSheet,StatusBar,View, SafeAreaView,ActivityIndicator } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { useEffect, useState, useRef } from 'react';
import Api from './Api';
import { cores } from './globalStyle';
import ModalNewItem from './components/ModalNewItem';
import ModalDelete from './components/ModalDelete';
import BottomSheet, { BottomSheetTextInput }  from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DeleteBottomSheet from './components/DeleteBottomSheet';
import NewItemBottomSheet from './components/NewItemBottomSheet';

export default function App() {
  const [items,setItems] = useState([]);
  const [newItemText,setNewItemText] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [modalVisible,setModalVisible] = useState(false);
  const [modalDeleteVisible,setModalDeleteVisible] = useState(false);
  const [idDelete,setIdDelete] = useState(null);
  const bottomSheetRef = useRef(null);
  const NewItemBottomSheetRef = useRef(null);

useEffect(()=>{
   const getItems = async () =>{
     setIsLoading(true);
     let json = await Api.getItems();
     setItems(json);
     setIsLoading(false);
   }
   getItems();
},[]);


const onOpenModalNewItem = async = () => {
    // setNewItemText('');
    // setModalVisible(true);
    NewItemBottomSheetRef.current.expand();
}

const onCancelDelete = () => {
  bottomSheetRef.current.close();
}



const onAddItemPress = async (itemText) => {
 
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: itemText };
    const listItems = [...items, myNewItem];
    let response = Api.addItem(myNewItem);
    setItems(listItems);
    setModalVisible(false);
   
    
}

const onDeleteItem = async (id) => {

  setIdDelete(id);
  bottomSheetRef.current.expand();
 
}

const onDeleteItemAction = async (id) => {

  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  let response = Api.deleteItem(id);
  bottomSheetRef.current.close();
 
}



const onCheckItem = async (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setItems(listItems);
  const myItem = listItems.filter((item) => item.id === id);
  let response = await Api.updateItem(id,myItem[0].checked);
  
};

  return (
    <GestureHandlerRootView style={styles.container}>
        <StatusBar animated={true} backgroundColor={cores.azul} barStyle="light-content"/>
        <Header onAddButtonPress={onOpenModalNewItem}/>
        <View style={styles.body}>
          {isLoading?<ActivityIndicator style={styles.loading} size="large" color={cores.azul}/>:<ListItem items={items} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>}
        </View>
        <ModalNewItem onAddItemPress={onAddItemPress} modalVisible={modalVisible} setModalVisible={setModalVisible} newItemText={newItemText} setNewItemText={setNewItemText}/>
        {/*<ModalDelete id={idDelete} modalVisible={modalDeleteVisible} setModalVisible={setModalDeleteVisible} onDelete={onDeleteItemAction}/>*/}
        <DeleteBottomSheet id={idDelete} ref={bottomSheetRef} onDelete={onDeleteItemAction}  onCancel={onCancelDelete}/>
        <NewItemBottomSheet ref={NewItemBottomSheetRef} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    widht: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body:{
    flex:1,
    marginHorizontal: 5,
  },
  loading:{
    position: 'absolute',
    top: '50%',
}
});
