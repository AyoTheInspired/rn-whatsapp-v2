import { ImageBackground, StyleSheet, FlatList } from "react-native";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import Message from "../components/Message";

const SingleChatScreen = () => {
	return (
		<ImageBackground source={bg} style={styles.bg}>
			<FlatList
				inverted
				style={styles.list}
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
			/>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	bg: {
		flex: 1,
	},

	list: {
		padding: 10,
	},
});

export default SingleChatScreen;
