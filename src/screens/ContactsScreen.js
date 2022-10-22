import { FlatList, StyleSheet, Text, View } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatListItem from "../components/ChatListItem";
import ContactListItem from "../components/ContactListItem";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { useEffect, useState } from "react";

const ContactsScreen = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		API.graphql(graphqlOperation(listUsers)).then((res) => {
			console.log(res);
			setUsers(res?.data?.listUsers?.items);
		});
	}, []);

	return (
		<FlatList
			data={users}
			renderItem={({ item }) => <ContactListItem user={item} />}
			style={{
				backgroundColor: "white",
			}}
		/>
	);
};

export default ContactsScreen;

const styles = StyleSheet.create({});
