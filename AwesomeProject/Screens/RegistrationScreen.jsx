import { useState } from "react";
import {
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

const onPressRegistration = () => {
	alert("Press Registration");
};

const RegistrationScreen = () => {
	const [login, onChangeLogin] = useState("");
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.registrationWrapper}>
				<Text style={styles.title}>Реєстрація</Text>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<View style={styles.form}>
						<TextInput
							style={styles.input}
							onChangeText={onChangeLogin}
							value={login}
							placeholder="Логін"
						/>
						<TextInput
							style={styles.input}
							onChangeText={onChangeEmail}
							value={email}
							placeholder="Адреса електронної пошти"
						/>
						<View style={styles.passwordInputContainer}>
							<TextInput
								style={styles.passwordInput}
								onChangeText={onChangePassword}
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
						<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
					</View>
				</KeyboardAvoidingView>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	registrationWrapper: {
		backgroundColor: "#ffffff",
		height: 550,
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
