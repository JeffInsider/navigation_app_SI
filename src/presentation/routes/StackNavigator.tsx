import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

//parecido a un interface
export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  //de momento no se requiere pasar parametros
  Settings: undefined;
};

//RootStackParams es el tipo de dato que va a recibir el stack
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 100,
          shadowColor: 'transparent',
        }
      }} 
    >
      {/*el nombre tiene que ser igual al RootStackParams*/}
      <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
      <Stack.Screen name='Products' component={ProductsScreen}></Stack.Screen>
      <Stack.Screen name='Product' component={ProductScreen}></Stack.Screen>
      <Stack.Screen name='Settings' component={SettingsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
