import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
	return (
		<ImageBackground
			source={require("./assets/image-bg.png")}
			resizeMode="cover"
			style={styles.imageBg}
		>
			<View style={styles.container}>
				<RegistrationScreen />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	imageBg: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
});
