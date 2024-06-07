import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ScanMolesScreen from "../screens/ScanMolesScreen";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScanMolesScreen"
        component={ScanMolesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Moles check" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
