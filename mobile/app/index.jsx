import { Link } from "expo-router";
import {Text,View} from "react-native";

export default function App() {

    return (
        <View 
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF'
        }}
        >
        <Text>Hello, World and lodus!</Text>
        <Link href={"/about"}> 
            <Text style={{color: 'blue'}}>Go to About</Text>
        </Link>
        </View>
    );
    }