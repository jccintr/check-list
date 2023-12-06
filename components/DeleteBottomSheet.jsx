import { StyleSheet, Text, View } from 'react-native';
import React, {useMemo,forwardRef,useCallback} from 'react';
import BottomSheet  from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const DeleteBottomSheet = forwardRef((props,ref) => {
    const snapPoints = useMemo(() => ['30%'], []);
    

    const renderBackdrop = useCallback((props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, []);

  return (
    <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        //onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={{backgroundColor:'#1d0f4e'}}
        handleIndicatorStyle={{backgroundColor: '#fff'}}
        enablePanDownToClose={true}
        
      >
      <View style={{flex:1, alignItems:'center'}}>
           <Text style={{fontWeight: 'bold',fontSize:16, color: '#fff'}}>Delete Bottom Sheet</Text>
           
           
        </View>

      </BottomSheet>
  )
});

export default DeleteBottomSheet

const styles = StyleSheet.create({


})