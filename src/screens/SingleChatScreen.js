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
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const SingleChatScreen = () => {
	const navigation = useNavigation();
	const { params } = useRoute();

	useEffect(() => {
		navigation.setOptions({
			title: params?.name || "",
		});
	}, [params?.name]);

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
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

export default SingleChatScreen;

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		paddingVertical: 10,
	},

	list: {
		padding: 10,
	},
});
