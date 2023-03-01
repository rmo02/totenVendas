import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Barcode } from "../screens/BarCode";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="BarCode" component={Barcode}/>
        </Navigator>
    )
}