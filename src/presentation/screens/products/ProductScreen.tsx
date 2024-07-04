import { Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

export const ProductScreen = () =>{
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  //console.log(params)

  //esto es para el titulo de la pantalla
  const navigation = useNavigation();
  //consta de dos partes, la primera es la funcion que se va a ejecutar y la segunda es el array de dependencias
  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

    return (
      <View style={globalStyles.container}>
        <Text>ProductScreen</Text>
        <Text style={globalStyles.text}>{params.id} - {params.name}</Text>
      </View>
    )
}