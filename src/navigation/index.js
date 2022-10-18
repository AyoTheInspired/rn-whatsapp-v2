import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SingleChatScreen from "../screens/SingleChatScreen";
import ChatsScreens from "../screens/ChatsScreens";
import MainTabNavigator from "./MainTabNavigator";
import ContactsScreen from "../screens/ContactsScreen";

const Navigator = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "whitesmoke" },
				}}>
				<Stack.Screen
					name="Home"
					component={MainTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Chat" component={SingleChatScreen} />
				<Stack.Screen name="Contacts" component={ContactsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
