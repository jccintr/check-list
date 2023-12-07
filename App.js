
import { StyleSheet,StatusBar,ActivityIndicator,FlatList } from 'react-native';
import Header from './components/Header';
import { useEffect, useState, useRef } from 'react';
import Api from './Api';
import { cores } from './globalStyle';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DeleteBottomSheet from './components/DeleteBottomSheet';
import NewItemBottomSheet from './components/NewItemBottomSheet';
import EmptyList from './components/EmptyList';
import CardItem from './components/CardItem';

export default function App() {
  const [items,setItems] = useState([]);
  const [newItemText,setNewItemText] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [idDelete,setIdDelete] = useState(null);
  const deleteBottomSheetRef = useRef(null);
  const newItemBottomSheetRef = useRef(null);

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
    setNewItemText('');
    newItemBottomSheetRef.current.expand();
}

const onCancelDelete = () => {
  deleteBottomSheetRef.current.close();
}



const onAddItemPress = async (itemText) => {
 
    if(itemText.trim().length>0){
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item: itemText };
      const listItems = [...items, myNewItem];
      let response = Api.addItem(myNewItem);
      setItems(listItems);
      newItemBottomSheetRef.current.close();
    }
    
    
}

const onDeleteItem = async (id) => {

  setIdDelete(id);
  deleteBottomSheetRef.current.expand();
 
}

const onDeleteItemAction = async (id) => {

  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  let response = Api.deleteItem(id);
  deleteBottomSheetRef.current.close();
 
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
        {isLoading&&<ActivityIndicator style={styles.loading} size="large" color={cores.azul}/>}
        {!isLoading&&<FlatList 
              style={styles.flatlist}
              showsVerticalScrollIndicator={false}
              data={items}
              ListEmptyComponent={<EmptyList/>}
              keyExtractor={(item)=> item.id}
              contentContainerStyle={items.length===0?{flexGrow:1,alignItems:'center',justifyContent:'center'}:''}
              renderItem={({item})=><CardItem item={item} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>}
            />}    
        <DeleteBottomSheet id={idDelete} ref={deleteBottomSheetRef} onDelete={onDeleteItemAction}  onCancel={onCancelDelete}/>
        <NewItemBottomSheet ref={newItemBottomSheetRef} onAddItemPress={onAddItemPress} newItemText={newItemText} setNewItemText={setNewItemText} />
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
  flatlist: {
     width: '100%',
  },
  loading:{
    position: 'absolute',
    top: '50%',
}
});
