import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { globalStyles } from '../../theme/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { RootStackParams } from '../../routes/StackNavigator'

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      {/*<Pressable
      onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable>*/}

      <PrimaryButton
        label='Productos'
        onPress={() => navigation.navigate('Products')} />
    </View>
  )

}