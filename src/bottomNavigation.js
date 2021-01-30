import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
const Tab = createBottomTabNavigator();
import Search from './pages/search'
import Profile from './pages/profile'
import ListEnterprise from './pages/listEnterprises'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#6495ED',
        }} initialRouteName={"ListEnterprise"}>
            <Tab.Screen options={{
                title: "Search",
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="text-box-search-outline" color={focused ? '#6495ED' : '#222'} size={30} />
                ),
            }} name="Search" component={Search} />
            <Tab.Screen options={{
                title: "Home",
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="home-outline" color={focused ? '#6495ED' : '#222'} size={30} />
                ),
            }} name="ListEnterprise" component={ListEnterprise} />
            <Tab.Screen options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="account" color={focused ? '#6495ED' : '#222'} size={30} />
                ),
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}