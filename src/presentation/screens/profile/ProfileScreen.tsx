import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets()
  const navigation = useNavigation()

  console.log('top: ', top)

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top + 20,
    }}>
      <HamburgerMenu/>
      <Text style={globalStyles.text}>ProfileScreen</Text>
      <PrimaryButton label='Abrir Menu' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
    </View>
  )
}