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

const RegistrationScreen = ({ navigation }) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const onPressRegistration = () => {
		const userData = {
			Login: login,
			Email: email,
			Password: password,
		};
		console.log(userData);

		setLogin("");
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
					<View style={styles.registrationWrapper}>
						<View style={styles.avatar}>
							<View style={styles.avatarBtn}>
								<Text style={styles.avatarText}>+</Text>
							</View>
						</View>
						<Text style={styles.title}>Реєстрація</Text>
						<KeyboardAvoidingView
							behavior={Platform.OS === "ios" ? "padding" : "height"}
						>
							<View style={styles.form}>
								<TextInput
									style={styles.input}
									onChangeText={setLogin}
									value={login}
									placeholder="Логін"
								/>
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
								<TouchableOpacity onPress={onPressRegistration}>
									<View style={styles.btn}>
										<Text style={styles.btnText}>Зареєстуватися</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => navigation.navigate("Login")}>
									<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
								</TouchableOpacity>
							</View>
						</KeyboardAvoidingView>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	imageBg: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	registrationWrapper: {
		position: "relative",
		backgroundColor: "#ffffff",
		height: 550,
		justifyContent: "center",
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	avatar: {
		position: "absolute",
		top: -60,
		width: 120,
		height: 120,
		backgroundColor: "#f6f6f6",
		borderRadius: 16,
	},
	avatarBtn: {
		position: "absolute",
		top: 80,
		left: 108,
		width: 25,
		height: 25,
		borderWidth: 2,
		borderColor: "#ff6c00",
		borderRadius: 25,
	},
	avatarText: {
		color: "#ff6c00",
		textAlign: "center",
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
