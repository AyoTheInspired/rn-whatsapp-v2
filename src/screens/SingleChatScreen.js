import {
	ImageBackground,
	StyleSheet,
	FlatList,
	Platform,
	KeyboardAvoidingView,
} from "react-native";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import Message from "../components/Message";
import InputBox from "../components/InputBox";

const SingleChatScreen = () => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.bg}>
			<ImageBackground source={bg} style={styles.bg}>
				<FlatList
					inverted
					style={styles.list}
					data={messages}
					renderItem={({ item }) => <Message message={item} />}
				/>
				<InputBox />
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		paddingVertical: 10,
	},

	list: {
		padding: 10,
	},
});

export default SingleChatScreen;
