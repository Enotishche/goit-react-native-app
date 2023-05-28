import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { Home } from "./src/Screens/Home";
import { MapScreen } from "./src/Screens/MapScreen";
import { CommentsScreen } from "./src/Screens/CommentsScreen";

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <AuthStack.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Comments" component={CommentsScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
