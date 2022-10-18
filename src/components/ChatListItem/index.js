import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const ChatListItem = () => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
				}}
				style={styles.image}
			/>
			<View style={styles.content}>
				<View style={styles.row}>
					<Text numberOfLines={1} style={styles.name}>
						Lukas
					</Text>
					<Text style={styles.subtitle}>8:30</Text>
				</View>
				<Text numberOfLines={2} style={styles.subtitle}>
					Hello there
				</Text>
			</View>
		</View>
	);
};

export default ChatListItem;
