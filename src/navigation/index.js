import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SingleChatScreen from "../screens/SingleChatScreen";
import ChatsScreens from "../screens/ChatsScreens";
import MainTabNavigator from "./MainTabNavigator";

const Navigator = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={MainTabNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Chat" component={SingleChatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
