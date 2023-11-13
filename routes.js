import { Ionicons } from "@expo/vector-icons";
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
            options={{headerShown:false,
            tabBarIcon:({focused,size,color})=>{
                if (focused){
                    return <Ionicons size={size} color={color} name="home"/>
                }
                return <Ionicons size={size} color={color} name="home-outline"/>
            } 
            }}
            /> 
            <Tab.Screen
            name="passwords"
            component={PassWords}
            options={{headerShown:false,
                tabBarIcon:({focused,size,color})=>{
                    if (focused){
                        return <Ionicons size={size} color={color} name="lock-closed"/>
                    }
                    return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                } }}
            />
        
        </Tab.Navigator>
    )
} 