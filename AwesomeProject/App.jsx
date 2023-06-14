import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostScreen from "./Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				<MainStack.Screen name="Registration" component={RegistrationScreen} />
				<MainStack.Screen name="Login" component={LoginScreen} />
				<MainStack.Screen name="Posts" component={PostScreen} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
