import { View} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const SafeScreen = ({children}) => {
    const insets= useSafeAreaInsets()
  return (
    <View style={{flex:1, padding:insets.top,paddingBottom: insets.bottom, backgroundColor: COLORS.background}}>
        {children}
    </View>
  );
};

export default SafeScreen