import {View, Text} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native-safe-area-context";
import Home from "./screens/Home.tsx";
import {Provider} from "react-redux";
import {store} from "./api/store.ts";
import Login from "./screens/Login.tsx";

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};
const App = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
