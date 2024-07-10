import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {Pressable, Text, View} from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburgerMenu = () => {
    const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ marginLeft: 10 }}>
          <IonIcon name='menu-outline' size={35}/>
        </Pressable>
      ),
    })
  }, [])
  return <></>
};
