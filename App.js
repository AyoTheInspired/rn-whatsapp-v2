import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/navigation";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
	useEffect(() => {
		const syncUser = async () => {
			//  get auth user
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});

			//  query DB using Auth user Sub ID
			const userData = await API.graphql(
				graphqlOperation(getUser, { id: authUser?.attributes?.sub })
			);

			// create a new user if there's none, or do nothing
			if (userData?.data?.getUser) {
				return;
			}

			const newUser = {
				id: authUser?.attributes?.sub,
				name: authUser?.attributes?.phone_number,
				image: "",
				status: "Hey there, I am using Whatsapp",
			};

			const newUserResponse = await API.graphql(
				graphqlOperation(createUser, { input: newUser })
			);
		};

		syncUser();
	}, []);

	return (
		<View style={styles.container}>
			<Navigator />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "whitesmoke",
		justifyContent: "center",
	},
});

export default withAuthenticator(App);
