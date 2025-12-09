import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import EarningsScreen from '../screens/EarningsScreen';
import EarningsActivityScreen from '../screens/EarningsActivityScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import WaybillScreen from '../screens/WaybillScreen';
import GenericScreen from '../screens/GenericScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import SidebarMenu from '../components/SidebarMenu';
import { colors } from '../styles/colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function EarningsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EarningsHome" component={EarningsScreen} />
            <Stack.Screen name="EarningsActivity" component={EarningsActivityScreen} />
            <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
            <Stack.Screen name="Waybill" component={WaybillScreen} />
        </Stack.Navigator>
    );
}

function GenericStack({ route }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={route.name + "Home"} component={GenericScreen} initialParams={{ title: route.name }} />
        </Stack.Navigator>
    );
}

function RootNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <SidebarMenu {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: colors.menuBackground, width: '80%' },
                drawerType: 'front',
                overlayColor: colors.overlay,
            }}
        >
            <Drawer.Screen name="Earnings" component={EarningsStack} />
            <Drawer.Screen name="Inbox" component={GenericStack} />
            <Drawer.Screen name="Referrals" component={GenericStack} />
            <Drawer.Screen name="Opportunities" component={GenericStack} />
            <Drawer.Screen name="Uber Pro" component={GenericStack} />
            <Drawer.Screen name="Wallet" component={GenericStack} />
            <Drawer.Screen name="Account" component={GenericStack} />
            <Drawer.Screen name="Help" component={GenericStack} />
        </Drawer.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={colors.black} />
            <RootNavigator />
        </NavigationContainer>
    );
}
