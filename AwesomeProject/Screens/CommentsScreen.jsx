import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CommentsScreen = () => {
	const [comment, setComment] = useState("");

	const addComment = () => {
		return comment;
	};

	return (
		<View style={styles.postWrapper}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Коментарі</Text>
				<Image
					style={styles.logImg}
					source={require("../assets/arrow-left.png")}
				/>
			</View>
			<View style={styles.main}>
				<View style={styles.container}>
					<Image
						style={styles.postImg}
						source={require("../assets/adaptive-icon.png")}
					/>
					<View style={styles.commentList}>
						<View style={styles.commentItem}>
							<Image
								style={styles.commentImg}
								source={require("../assets/avatar-2.png")}
							/>
							<View style={styles.comment}>
								<Text style={styles.commentText}>
									Really love your most recent photo. I have been trying to
									capture the same thing for a few months and would love some
									tips!
								</Text>
								<Text style={styles.commentDate}>Current date</Text>
							</View>
						</View>
					</View>
					<View style={styles.commentInputContainer}>
						<TextInput
							style={styles.commentInput}
							onChangeText={setComment}
							value={comment}
							placeholder="Коментувати..."
						/>
						<TouchableOpacity style={styles.commentBtn} onPress={addComment}>
							<Image source={require("../assets/Vector.png")} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CommentsScreen;

const styles = StyleSheet.create({
	postWrapper: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "flex-start",
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 342,
	},
	header: {
		position: "relative",
		height: 88,
		borderBottomWidth: 3,
		borderBottomColor: "#f6f6f6",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 32,
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
	main: {
		alignItems: "center",
	},
	postImg: {
		backgroundColor: "#f6f6f6",
		maxWidth: 342,
		height: 240,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		marginBottom: 8,
		marginBottom: 32,
	},
	commentList: {
		width: 342,
		marginBottom: 32,
	},
	commentItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 16,
	},
	commentImg: {
		width: 28,
		height: 28,
	},
	comment: {
		backgroundColor: "rgba(0, 0, 0, 0.03)",
		padding: 16,
		borderRadius: 6,
		maxWidth: 298,
	},
	commentText: {
		fontWeight: 400,
		fontSize: 13,
		color: "#212121",
		lineHeight: 18,
		marginBottom: 8,
	},
	commentDate: {
		fontWeight: 400,
		fontSize: 10,
		color: "#bdbdbd",
		alignSelf: "flex-end",
	},
	commentInputContainer: {
		position: "relative",
	},
	commentInput: {
		backgroundColor: "#f6f6f6",
		height: 50,
		width: 342,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "#e8e8e8",
		padding: 16,
		paddingRight: 60,
	},
	commentBtn: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 34,
		top: 8,
		right: 8,
		backgroundColor: "#ff6c00",
		alignItems: "center",
		justifyContent: "center",
	},
});
