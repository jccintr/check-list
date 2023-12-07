import { StyleSheet, Text, View } from 'react-native';
import React, {useMemo,forwardRef,useCallback} from 'react';
import BottomSheet  from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import Botao from '../components/reusable/Botao';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { cores } from '../globalStyle';

const NewItemBottomSheet = forwardRef((props,ref) => {
    const snapPoints = useMemo(() => ['30%'], []);
    

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, []);

  return (
    
    <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{backgroundColor: cores.azul}}
        enablePanDownToClose={true}
        keyboardBehavior="interactive"
      >
          <View style={{flex:1, alignItems:'center'}}>
              <Text style={{fontSize:20, color: '#000'}}>New Item</Text>
              <HeightSpacer h={20} />
              <BottomSheetTextInput 
                  style={styles.input}
                  value={props.newItemText}
                  onChangeText={t=>props.setNewItemText(t)}
                />
              <HeightSpacer h={10} />
              <Botao onPress={()=>props.onAddItemPress(props.newItemText)} text={'SAVE'} textSize={18} textColor={'#FFF'} width={'90%'} backgroundColor={cores.azul} borderWidth={0} borderColor={'#F00'} borderRadius={10} isLoading={false}/>
          </View>

      </BottomSheet>
  )
});

export default NewItemBottomSheet

const styles = StyleSheet.create({
  input: {
    marginTop:8,
    width: '90%',
    marginHorizontal:16,
    marginBottom:10,
    borderRadius:10,
    fontSize:16,
    lineHeight:20,
    padding:8,
    color: '#000',
    backgroundColor: 'rgba(201,201,201,0.50)',
    
  }

})