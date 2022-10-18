import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => {}} style={styles.container}>
			<Image
				source={{
					uri: user.image,
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
