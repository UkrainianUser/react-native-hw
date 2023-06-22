import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

function Posts() {
	return (
		<View>
			<Image style={styles.btnImg} source={require("../assets/grid.png")} />
		</View>
	);
}

function CreatePosts() {
	return (
		<View style={styles.btn}>
			<Image style={styles.btnImg} source={require("../assets/Union.png")} />
		</View>
	);
}

function Profile() {
	return (
		<View>
			<Image style={styles.btnImg} source={require("../assets/user.png")} />
		</View>
	);
}

const Tabs = createBottomTabNavigator();

const PostScreen = () => {
	return (
		<View style={styles.postWrapper}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Публікації</Text>
				<Image
					style={styles.logImg}
					source={require("../assets/log-out.png")}
				/>
			</View>
			<View style={styles.main}></View>
			<View style={styles.footer}>
				<Tabs.Navigator
					screenOptions={{
						tabBarShowLabel: false,
						headerTitle: "",
						initialRouteName: "Posts",
					}}
				>
					<Tabs.Screen
						name="Posts"
						component={Home}
						options={{
							tabBarIcon: () => Posts(),
						}}
					/>
					<Tabs.Screen
						name="CreatePosts"
						component={CreatePostsScreen}
						options={{
							tabBarIcon: () => CreatePosts(),
						}}
					/>
					<Tabs.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							tabBarIcon: () => Profile(),
						}}
					/>
				</Tabs.Navigator>
			</View>
		</View>
	);
};

export default PostScreen;

const styles = StyleSheet.create({
	postWrapper: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-between",
	},
	header: {
		position: "relative",
		height: 88,
		borderBottomWidth: 3,
		borderBottomColor: "#f6f6f6",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		textAlign: "center",
		fontWeight: 500,
		fontSize: 17,
	},
	logImg: {
		position: "absolute",
		right: 20,
		top: 36,
		height: 24,
		width: 24,
	},
	footer: {
		height: 82,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 40,
	},
	btn: {
		height: 40,
		width: 70,
		backgroundColor: "#ff6c00",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
