import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations";
import { API, Auth, graphql, graphqlOperation } from "aws-amplify";

const ContactListItem = ({ user }) => {
	const navigation = useNavigation();

	const onPress = async () => {
		// Check if we already have a ChatRoom with user
		const existingChatRoom = await getCommonChatRoomWithUser(user.id);
		if (existingChatRoom) {
			navigation.navigate("Chat", { id: existingChatRoom.id });
			return;
		}

		// Create a new Chatroom
		const newChatRoomData = await API.graphql(
			graphqlOperation(createChatRoom, { input: {} })
		);
		console.log(newChatRoomData);
		if (!newChatRoomData.data?.createChatRoom) {
			console.log("Error creating the chat error");
		}
		const newChatRoom = newChatRoomData.data?.createChatRoom;

		// Add the clicked user to the ChatRoom
		await API.graphql(
			graphqlOperation(createUserChatRoom, {
				input: { chatRoomID: newChatRoom.id, userID: user.id },
			})
		);

		// Add the auth user to the ChatRoom
		const authUser = await Auth.currentAuthenticatedUser();
		await API.graphql(
			graphqlOperation(createUserChatRoom, {
				input: { chatRoomID: newChatRoom.id, userID: authUser.attributes.sub },
			})
		);

		// navigate to the newly created ChatRoom
		navigation.navigate("Chat", { id: newChatRoom.id });
	};

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Image
				source={{
					uri:
						user.image ||
						'"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg"',
				}}
				style={styles.image}
			/>
			<View style={styles.content}>
				<Text numberOfLines={1} style={styles.name}>
					{user.name}
				</Text>
				<Text numberOfLines={2} style={styles.subtitle}>
					{user.status}
				</Text>
			</View>
		</Pressable>
	);
};

export default ContactListItem;
