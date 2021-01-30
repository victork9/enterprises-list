import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// import { Root } from 'native-base'
import React from 'react';
import Login from './pages/login'
import BottomNav from '../src/bottomNavigation'

const Stack = createStackNavigator();

function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#F68B1F' }, headerTintColor: '#fff' }}>
                <Stack.Screen options={{ header: () => { false } }} initialRouteName="Login" name="Login" component={Login} />
                {/* <Stack.Screen options={{ header: () => { false } }} name="ListEnterprise" component={ListEnterprise} /> */}
                <Stack.Screen options={{ header: () => { false } }} name="BottomNav" component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;