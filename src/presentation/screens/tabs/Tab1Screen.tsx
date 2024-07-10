import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons'
import { globalColors, globalStyles } from '../../theme/theme'
import { IonIcon } from '../../components/shared/IonIcon'

export const Tab1Screen = () => {

    return (
        <View>
            <HamburgerMenu/>
            <Text style={globalStyles.text}>Tab1Screen</Text>
            <Icon name='accessibility-outline' size={100} color={globalColors.primary}/>

            <IonIcon name='accessibility-outline' size={200} color="green"/>
        </View>
    )

}