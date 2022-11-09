import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

import HomeSvg from '@assets/home.svg';
import ProfileSvg from '@assets/profile.svg';
import HistorySvg from '@assets/history.svg';

import Home from '@screens/Home';
import Exercise from '@screens/Exercise';
import Profile from '@screens/Profile';
import History from '@screens/History';

type AppRoutes = {
    Home: undefined;
    Historico: undefined;
    Perfil: undefined;
    Exercicio: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const Stack = createBottomTabNavigator<AppRoutes>();

export default function AppRoutes(){
    const { sizes, colors } = useTheme();

    const iconsSize = sizes[6];
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.orange[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }
        }}>
            <Stack.Screen
                name="Home"
                component={Home} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconsSize} height={iconsSize} />
                    )
                }}
            />
            <Stack.Screen 
                name="Historico" 
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconsSize} height={iconsSize} />
                    )
                }}
            />
            <Stack.Screen 
                name="Perfil" 
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconsSize} height={iconsSize} />
                    )
                }}
            />
            <Stack.Screen 
                name="Exercicio" 
                component={Exercise}  
                options={{
                    tabBarButton: () => null
                }}
            />
        </Stack.Navigator>
    );
}