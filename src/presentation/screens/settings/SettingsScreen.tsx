import {Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  //este useNavigation es para poder navegar a otra pantalla
const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>
      <PrimaryButton
        label='Regresar'
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label='Ir a home'
        //popToTop es para ir a la pantalla principal y va resetear todas las pantallas
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
