import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from "react-native";

const onPressRegistration = () => {
	alert("Press Registration");
};

const RegistrationScreen = () => {
	return (
		<>
			<Text style={styles.title}>Реєстрація</Text>
			<View style={styles.form}>
				<TextInput style={styles.input} value="login" placeholder="Логін" />
				<TextInput
					style={styles.input}
					value="email"
					placeholder="Адреса електронної пошти"
				/>
				<TextInput style={styles.input} value="password" placeholder="Пароль" />
				<TouchableHighlight onPress={onPressRegistration}>
					<View style={styles.btn}>
						<Text style={styles.btnText}>Зареєстуватися</Text>
					</View>
				</TouchableHighlight>
				<Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
			</View>
		</>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	title: {
		fontWeight: 500,
		fontSize: 30,
		marginBottom: 33,
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
	btn: {
		height: 52,
		backgroundColor: "#ff6c00",
		borderRadius: 100,
	},
	btnText: {
		textAlign: "center",
		fontSize: 16,
		padding: 16,
	},
	textLink: {
		textAlign: "center",
	},
});
