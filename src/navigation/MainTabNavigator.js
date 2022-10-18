import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreens from "../screens/ChatsScreens";
import NotImplementedScreen from "../screens/NotImplementedScreen";

const MainTabNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator initialRouteName="Chats">
			<Tab.Screen name="Chats" component={ChatsScreens} />
			<Tab.Screen name="Status" component={NotImplementedScreen} />
			<Tab.Screen name="Calls" component={NotImplementedScreen} />
			<Tab.Screen name="Camera" component={NotImplementedScreen} />
			<Tab.Screen name="Settings" component={NotImplementedScreen} />
		</Tab.Navigator>
	);
};

export default MainTabNavigator;
