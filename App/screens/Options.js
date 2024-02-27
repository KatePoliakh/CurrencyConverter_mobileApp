import React from "react";
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet , ScrollView, Linking, Alert} from "react-native";
import { Entypo} from "@expo/vector-icons";
import colours from "../constants/colours";
import { RowItem, RowSeparator } from "../components/RowItem";

// const styles = StyleSheet.create({
//     // row: {
//     //     paddingVertical: 16, 
//     //     paddingHorizontal: 20,
//     //     flexDirection: "row",
//     //     alignItems: "center",
//     //     justifyContent: "space-between"
//     // }, 
//     // text: {
//     //     fontSize: 16,
//     //     color: colours.text
//     // },
//     separator: {
//         backgroundColor: colours.border,
//         height: StyleSheet.hairlineWidth,
//         marginLeft: 20
//     }
// });
const openURL = (url) =>{
    return Linking.openURL(url).catch(()=> {
    Alert.alert("Sorry, something went wrong.", "Please try again later.");
    });
};
export default () => {
    return (
        <SafeAreaView style={{backgroundColor: "pink", flex: 1}}>
            <ScrollView>
            {/*<TouchableOpacity style={styles.row}>
                <Text style={styles.text}>Themes</Text>
                <Entypo name="chevron-right" size={20} color={colours.blue}/>
            </TouchableOpacity>*/}
            <RowItem 
                text="Themes"
                onPress={() => alert("todo!")}
                rigthIcon={
                <Entypo name="chevron-right" size={20} color={colours.blue}/>
                }
            />

            <RowSeparator />

            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native Basics</Text>
                <Entypo name="export" size={20} color={colours.blue}/>
            </TouchableOpacity> */}
            <RowItem 
                text="React Native Basics"
                onPress={() => openURL(
                    "htssdcdavdfv://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
                    )
                }
                rigthIcon={
                <Entypo name="export" size={20} color={colours.blue}/>
                }
            />

            <RowSeparator />

            {/* <TouchableOpacity style={styles.row}>
                <Text style={styles.text}>React Native by example</Text>
                <Entypo name="export" size={20} color={colours.blue}/>
            </TouchableOpacity> */}
            <RowItem 
                text="React Native by example"
                onPress={() => openURL(
                    "https://learn.handlebarlabs.com/p/react-native-by-example"
                    )}
                rigthIcon={
                <Entypo name="export" size={20} color={colours.blue}/>
                }
            />

            </ScrollView>
        </SafeAreaView>
    )
}
