import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
    onPress: () => void;
    label: string;
}

export const PrimaryButton = ({onPress, label}: Props) => {
    
    return (
        <Pressable
        //solo se pone onpress sin la funcion flecha por que no trae nada
            onPress={onPress}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    );
};
