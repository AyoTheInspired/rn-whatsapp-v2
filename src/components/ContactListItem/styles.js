import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 10,
		marginVertical: 7,
		height: 70,
		alignItems: "center",
	},

	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},

	content: {
		flex: 1,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "lightgrey",
	},

	row: {
		flexDirection: "row",
		marginBottom: 5,
	},

	name: {
		fontWeight: "bold",
	},

	subtitle: {
		color: "grey",
	},
});

export default styles;
