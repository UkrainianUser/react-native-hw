import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
	return (
		<ImageBackground
			source={require("../assets/image-bg.png")}
			resizeMode="cover"
			style={styles.imageBg}
		>
			<View style={styles.container}>
				<View style={styles.profileWrapper}>
					<View style={styles.wrapper}>
						<View style={styles.avatar}>
							<View style={styles.avatarBtn}>
								<Text style={styles.avatarText}>+</Text>
							</View>
						</View>
						<Text style={styles.title}>UserName</Text>

						<View style={styles.postList}>
							<View style={styles.postItem}>
								<Image
									style={styles.postImg}
									source={require("../assets/adaptive-icon.png")}
								/>
								<Text>Descript</Text>
								<View></View>
							</View>
						</View>
					</View>
					<View style={styles.footer}>
						<View>
							<Image
								style={styles.btnImg}
								source={require("../assets/grid.png")}
							/>
						</View>
						<View style={styles.btn}>
							<Image
								style={styles.btnImg}
								source={require("../assets/user2.png")}
							/>
						</View>
						<View>
							<Image
								style={styles.btnImg}
								source={require("../assets/Union2.png")}
							/>
						</View>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	imageBg: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	profileWrapper: {
		position: "relative",
		backgroundColor: "#ffffff",
		height: 550,
		justifyContent: "space-between",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	wrapper: {
		alignItems: "center",
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
		marginTop: 92,
		marginBottom: 32,
	},
	postImg: {
		backgroundColor: "#f6f6f6",
		maxWidth: 342,
		height: 240,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		marginBottom: 8,
		marginBottom: 8,
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
		backgroundColor: "#ff6c00",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});
