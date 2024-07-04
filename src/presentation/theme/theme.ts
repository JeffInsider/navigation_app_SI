import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#0B2447',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#78A083',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    background: '#fff',
  };

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: globalColors.background,
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        color: globalColors.dark,
        marginBottom: 10,
        fontSize: 30,
    }

});