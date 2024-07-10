import { Pressable, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { RootStackParams } from '../../routes/StackNavigator'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  //useEffect(() => {
  // navigation.setOptions({
  //  headerLeft: () => (
  //    <Pressable
  //     onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  //     style={{ marginLeft: 10 }}>
  //     <Text style={globalStyles.text}>Menu</Text>
  //    </Pressable>
  //  ),
  //})
  //}, [])

  return (
    <View style={globalStyles.container}>

      {/*<Pressable
      onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable>*/}
  
      <HamburgerMenu />
      <PrimaryButton
        label='Productos'
        onPress={() => navigation.navigate('Products')} />
    </View>
  )

}