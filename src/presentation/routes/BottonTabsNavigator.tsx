import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();
export const BottonTabsNavigator = ()  => {
  return (
    <Tab.Navigator
        sceneContainerStyle = {{
            backgroundColor: globalColors.background,
        }}
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                marginBottom: 10,
            },
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
            tabBarStyle: {
                borderWidth: 0,
                elevation: 0,
                shadowColor: 'transparent',
                borderColor: 'transparent',
            }
        }}
    >
      <Tab.Screen name="Tab1" options={{
        title: 'Tab 1',
        tabBarIcon: props => <IonIcon name='add-outline' size={30} color={props.color}/>
      
      }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{
        title: 'Tab 2',
        tabBarIcon: props => <IonIcon name='add-outline' size={30} color={props.color}/>
        //en el componente es lo que carga en la vista
      }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{
        title: 'Tab 3',
        tabBarIcon: props => <IonIcon name='add-outline' size={30} color={props.color}/>
      }} component={StackNavigator} />
    </Tab.Navigator>
  );
}