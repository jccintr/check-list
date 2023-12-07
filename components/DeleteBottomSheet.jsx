import { StyleSheet, Text, View } from 'react-native';
import React, {useMemo,forwardRef,useCallback} from 'react';
import BottomSheet  from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Botao from '../components/reusable/Botao';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { cores } from '../globalStyle';

const DeleteBottomSheet = forwardRef((props,ref) => {
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
      >

            <View style={{flex:1, alignItems:'center'}}>
                <Text style={{fontSize:20, color: '#000'}}>Delete this item ?</Text>
                <HeightSpacer h={20} />
                <Botao onPress={()=>props.onDelete(props.id)} text={'DELETE'} textSize={18} textColor={'#FFF'} width={'90%'} backgroundColor={cores.vermelho} borderWidth={0} borderColor={cores.vermelho} borderRadius={10} isLoading={false}/>
                <HeightSpacer h={20} />
                <Botao onPress={props.onCancel} text={'CANCEL'} textSize={18} textColor={cores.azul} width={'90%'} backgroundColor={'#FFF'} borderWidth={2} borderColor={cores.azul} borderRadius={10} isLoading={false}/>
                <HeightSpacer h={20} />
            </View>

      </BottomSheet>
  )
});

export default DeleteBottomSheet

const styles = StyleSheet.create({


})