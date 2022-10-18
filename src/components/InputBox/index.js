import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
	return (
		<View style={styles.container}>
			<AntDesign name="plus" size={24} color="royalblue" />
			<TextInput placeholder="Type a message" style={styles.input} />
			<MaterialIcons style={styles.send} name="send" size={18} color="white" />
		</View>
	);
};

export default InputBox;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "whitesmoke",
		padding: 5,
		alignItems: "center",
	},
	input: {
		fontSize: 18,
		flex: 1,
		backgroundColor: "white",
		padding: 5,
		paddingHorizontal: 10,
		marginHorizontal: 10,
		borderRadius: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "lightgray",
	},
	send: {
		backgroundColor: "royalblue",
		padding: 7,
		borderRadius: 15,
		overflow: "hidden",
	},
});
