import { StyleSheet, Text, View } from 'react-native';
import React, {useMemo,forwardRef,useCallback} from 'react';
import BottomSheet  from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import Botao from '../components/reusable/Botao';
import HeightSpacer from '../components/reusable/HeightSpacer';

const NewItemBottomSheet = forwardRef((props,ref) => {
    const snapPoints = useMemo(() => ['30%'], []);
    

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, []);

  return (
    <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        //onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        //backgroundStyle={{backgroundColor:'#1d0f4e'}}
        //handleIndicatorStyle={{backgroundColor: '#fff'}}
        enablePanDownToClose={true}
        
      >
      <View style={{flex:1, alignItems:'center'}}>
           <Text style={{fontSize:20, color: '#000'}}>New item</Text>
           <HeightSpacer h={20} />
           <Botao onPress={()=>{}} text={'DELETE'} textSize={18} textColor={'#FFF'} width={'90%'} backgroundColor={'#F00'} borderWidth={0} borderColor={'#F00'} borderRadius={10} isLoading={false}/>
           <HeightSpacer h={20} />
           <Botao onPress={()=>{}} text={'CANCEL'} textSize={18} textColor={'#F00'} width={'90%'} backgroundColor={'#FFF'} borderWidth={1} borderColor={'#F00'} borderRadius={10} isLoading={false}/>
           <HeightSpacer h={20} />

        </View>

      </BottomSheet>
  )
});

export default NewItemBottomSheet

const styles = StyleSheet.create({


})