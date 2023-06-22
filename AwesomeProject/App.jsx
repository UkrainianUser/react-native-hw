import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostScreen from "./Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./Screens/ProfileScreen";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				<MainStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name="Login"
					component={PostScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name="Posts"
					component={PostScreen}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
