import { useState } from "react";
import {
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const onPressLogin = () => {
		const userData = {
			Email: email,
			Password: password,
		};
		console.log(userData);

		setEmail("");
		setPassword("");
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<ImageBackground
			source={require("../assets/image-bg.png")}
			resizeMode="cover"
			style={styles.imageBg}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.loginWrapper}>
						<Text style={styles.title}>Увійти</Text>
						<KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding" : "height"}
						>
							<View style={styles.form}>
								<TextInput
									style={styles.input}
									onChangeText={setEmail}
									value={email}
									placeholder="Адреса електронної пошти"
									keyboardType="email-address"
								/>
								<View style={styles.passwordInputContainer}>
									<TextInput
										style={styles.passwordInput}
										onChangeText={setPassword}
										value={password}
										placeholder="Пароль"
										secureTextEntry={!showPassword}
									/>
									<TouchableOpacity
										style={styles.showPasswordButton}
										onPress={togglePasswordVisibility}
									>
										<Text style={styles.showPasswordText}>
											{showPassword ? "Приховати" : "Показати"}
										</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity onPress={onPressLogin}>
									<View style={styles.btn}>
										<Text style={styles.btnText}>Увійти</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => navigation.navigate("Registration")}
								>
									<Text style={styles.textLink}>
										Немає акаунту? Зареєструватися
									</Text>
								</TouchableOpacity>
							</View>
						</KeyboardAvoidingView>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	imageBg: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	loginWrapper: {
		backgroundColor: "#ffffff",
		height: 490,
		paddingLeft: 16,
		paddingRight: 16,
		justifyContent: "center",
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	title: {
		fontWeight: 500,
		fontSize: 30,
		marginBottom: 32,
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: 16,
	},
	input: {
		backgroundColor: "#f6f6f6",
		height: 50,
		width: 350,
		borderRadius: 8,
		padding: 16,
	},
	passwordInputContainer: {
		position: "relative",
		marginBottom: 42,
	},
	passwordInput: {
		backgroundColor: "#f6f6f6",
		height: 50,
		width: 350,
		borderRadius: 8,
		padding: 16,
		paddingRight: 60,
	},
	showPasswordButton: {
		position: "absolute",
		top: 16,
		right: 16,
	},
	showPasswordText: {
		color: "#1b4371",
	},
	btn: {
		height: 52,
		backgroundColor: "#ff6c00",
		borderRadius: 100,
	},
	btnText: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 16,
		padding: 16,
	},
	textLink: {
		textAlign: "center",
		color: "#1b4371",
	},
});
