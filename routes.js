import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/index";
import { PassWords } from "./pages/password/index";
 

const Tab =  createBottomTabNavigator();


export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="home"
            component={Home}
            />
             <Tab.Screen
            name="passwords"
            component={PassWords}
            />
        
        </Tab.Navigator>
    )
} 