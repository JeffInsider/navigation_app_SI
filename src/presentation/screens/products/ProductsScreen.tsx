import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Arroz'},
  {id: 2, name: 'Frijoles'},
  {id: 3, name: 'Maíz'},
  {id: 4, name: 'Azúcar'},
  {id: 5, name: 'Leche'},
  {id: 6, name: 'Huevos'},
  {id: 7, name: 'Aceite'},
  {id: 8, name: 'Café'},
  {id: 9, name: 'Semitas'},
  {id: 10, name: 'Queso'},
  {id: 11, name: 'Tortillas'},
  {id: 12, name: 'Carne de res'},
  {id: 13, name: 'Pollo'},
  {id: 14, name: 'Pan'},
  {id: 15, name: 'Mantequilla'},
  {id: 16, name: 'Pasta'},
  {id: 17, name: 'Sal'},
  {id: 18, name: 'Plátanos'},
  {id: 19, name: 'Zanahorias'},
  {id: 20, name: 'Papas'},
];

export const ProductsScreen = () =>{
  const navigation = useNavigation<NavigationProp<RootStackParams>>()
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Productos</Text>
        {/*Es parecido a un map pero el nos esta dando la funcion de un map pero en un flatlist*/}
        <FlatList
          data={products}
          /*el item extrae los name de cada products*/
          renderItem={({item}) => (
            <PrimaryButton
            label={item.name}
            //el navigate recibe el nombre de la pantalla a la que se va a navegar
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
            />
          )}
        />
        <Text style={globalStyles.text}>Ajustes</Text>
        <PrimaryButton
          label='Ajustes'
          onPress={() => navigation.navigate('Settings')}/>
      </View>
    )
}