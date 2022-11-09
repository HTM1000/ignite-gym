import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

type AuthRoutes = {
    SignIn: undefined;
    SignUp: undefined;
}

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

export default function AuthRoutes(){
    return (
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );   
}