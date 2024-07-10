
import Icon from 'react-native-vector-icons/Ionicons';
import { globalColors } from '../../theme/theme';

interface Props {
    size?: number;
    color?: string;
    name: string;
}

//si no vienen el tamaño y el color se asignan por defecto
export const IonIcon = ({
    size = 20,
    color = globalColors.primary,
    name,
}: Props) => {
    return (
        <Icon name={name} size={size} color={color} />
    );
}