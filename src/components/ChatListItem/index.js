import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() =>
				navigation.navigate("Chat", { id: chat.id, name: chat.user.name })
			}
			style={styles.container}>
			<Image
				source={{
					uri: chat.user.image,
				}}
				style={styles.image}
			/>
			<View style={styles.content}>
				<View style={styles.row}>
					<Text numberOfLines={1} style={styles.name}>
						{chat.user.name}
					</Text>
					<Text style={styles.subtitle}>
						{dayjs(chat.lastMessage.createdAt).fromNow(true)}
					</Text>
				</View>
				<Text numberOfLines={2} style={styles.subtitle}>
					{chat.lastMessage.text}
				</Text>
			</View>
		</Pressable>
	);
};

export default ChatListItem;
