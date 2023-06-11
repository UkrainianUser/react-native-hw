import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const CreatePostScreen = () => {
	const [photoName, setPhotoName] = useState("");
	const [photoLocation, setPhotoLocation] = useState("");

	const onPressPublish = () => {
		const discript = {
			Name: photoName,
			Location: photoLocation,
		};
		console.log(discript);

		setPhotoName("");
		setPhotoLocation("");
	};

	return (
		<View style={styles.postWrapper}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Створити публікацію</Text>
				<Image
					style={styles.logImg}
					source={require("../assets/arrow-left.png")}
				/>
			</View>
			<View style={styles.main}>
				<View style={styles.container}>
					<View style={styles.photoBox}>
						<TouchableOpacity style={styles.photoHolder}>
							<View style={styles.photoBorder}>
								<Image
									style={styles.photoImg}
									source={require("../assets/camera_alt-black.png")}
								/>
							</View>
						</TouchableOpacity>
						<Text style={styles.photoText}>Завантажте фото</Text>
					</View>
					<View style={styles.form}>
						<TextInput
							style={styles.photoInput}
							onChangeText={setPhotoName}
							value={photoName}
							placeholder="Назва..."
						/>
						<View style={styles.locationInputBox}>
							<TextInput
								style={styles.locationInput}
								onChangeText={setPhotoLocation}
								value={photoLocation}
								placeholder="Місцевість..."
							/>
							<Image
								style={styles.inputImg}
								source={require("../assets/map-pin.png")}
							/>
						</View>
						<TouchableOpacity onPress={onPressPublish}>
							<View style={styles.formBtn}>
								<Text style={styles.btnText}>Опубліковати</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.footer}>
				<View style={styles.btn}>
					<Image
						style={styles.btnImg}
						source={require("../assets/trash-2.png")}
					/>
				</View>
			</View>
		</View>
	);
};

export default CreatePostScreen;

const styles = StyleSheet.create({
	postWrapper: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-between",
	},
	container: {
		alignItems: "center",
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
		left: 20,
		top: 36,
		height: 24,
		width: 24,
	},
	photoBox: {
		marginBottom: 48,
	},
	photoHolder: {
		backgroundColor: "#f6f6f6",
		width: 342,
		height: 240,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		marginBottom: 8,
	},
	photoBorder: {
		width: 60,
		height: 60,
		backgroundColor: "#ffffff",
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	photoText: {
		color: "#bdbdbd",
		fontWeight: 400,
		fontSize: 16,
	},
	form: {
		alignItems: "center",
		gap: 16,
	},
	photoInput: {
		width: 342,
		height: 46,
		borderBottomWidth: 1,
		borderBottomColor: "#e8e8e8",
		paddingTop: 15,
		paddingBottom: 15,
	},
	locationInputBox: {
		position: "relative",
		marginBottom: 32,
	},
	locationInput: {
		width: 342,
		height: 46,
		borderBottomWidth: 1,
		borderBottomColor: "#e8e8e8",
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 26,
	},
	inputImg: {
		position: "absolute",
		top: 10,
	},
	formBtn: {
		width: 342,
		height: 52,
		backgroundColor: "#f6f6f6",
		borderRadius: 100,
	},
	btnText: {
		color: "#bdbdbd",
		textAlign: "center",
		fontSize: 16,
		padding: 16,
	},

	footer: {
		height: 82,
		borderTopWidth: 3,
		borderTopColor: "#f6f6f6",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 40,
	},
	btn: {
		height: 40,
		width: 70,
		backgroundColor: "#f6f6f6",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
