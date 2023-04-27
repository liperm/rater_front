import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export function Home() {
    return (
        <View style={style.container}>
            <Text>
                Olá Mundo!
            </Text>
            <StatusBar style="auto"/>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'black'
    }
});