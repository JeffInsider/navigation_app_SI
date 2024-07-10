import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { useWindowDimensions, View } from 'react-native';
import { globalColors } from '../theme/theme';
import { BottonTabsNavigator } from './BottonTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();
export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
        drawerLabelStyle: {
          marginLeft: 20,
        },
      }}>
      {/*<Drawer.Screen name="StackNavigator" component={StackNavigator} />*/}
      <Drawer.Screen
        options={{
          drawerIcon: (props) => (
            <IonIcon name='add-outline' size={30} color={props.color} />
          )
        }}
        name='Tabs'
        component={BottonTabsNavigator}
      />
      <Drawer.Screen 
       options={{
        drawerIcon: (props) => (
          <IonIcon name='add-outline' size={30} color={props.color} />
        )
      }}
       name="Profile" 
       component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
      }}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );

}