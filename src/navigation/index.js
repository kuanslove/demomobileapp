import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import RecipeDetail from "../screens/RecipeDetail"

const Stack = createNativeStackNavigator();

export default AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="RecipeDetails" component={RecipeDetail} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}