import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostScreen from "./Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "./Screens/CommentsScreen";

const MainStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				<MainStack.Screen name="Registration" component={RegistrationScreen} />
				<MainStack.Screen name="Login" component={CommentsScreen} />
				<MainStack.Screen name="Posts" component={PostScreen} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
