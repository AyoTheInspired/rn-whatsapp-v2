import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
	return (
		<View style={styles.container}>
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
		</View>
	);
};

export default ChatListItem;
