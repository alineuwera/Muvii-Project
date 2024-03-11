import ChangeProfile from "./editprofile";
import Home from "./home";
import ListItem from "./list";
import SearchItem from "./search";
import Search from "./search1";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator ()
export default DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator initialRouteName="EditProfile">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Search" component={SearchItem} />
            <Drawer.Screen name="list" component={ListItem}/>
            <Drawer.Screen name="EditProfile" component={ChangeProfile} />
        </Drawer.Navigator>
    )
}