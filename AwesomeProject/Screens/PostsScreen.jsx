import { Image, StyleSheet, Text, View } from "react-native";

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
				<View>
					<Image style={styles.btnImg} source={require("../assets/grid.png")} />
				</View>
				<View style={styles.btn}>
					<Image
						style={styles.btnImg}
						source={require("../assets/Union.png")}
					/>
				</View>
				<View>
					<Image style={styles.btnImg} source={require("../assets/user.png")} />
				</View>
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
