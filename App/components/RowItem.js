import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colours from "../constants/colours";

const styles = StyleSheet.create({
    row: {
        paddingVertical: 16, 
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
       // backgroundColor: "red"
    }, 
    text: {
        fontSize: 16,
        color: colours.text
    },
    separator: {
        backgroundColor: colours.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
});
export const RowItem = ({ text, rigthIcon, onPress}) => {
    return(
    <TouchableOpacity style={styles.row} onPress ={onPress}>
        <Text style={styles.text}>{text}</Text>
        {rigthIcon}
    </TouchableOpacity>
    );
};

export const RowSeparator = () => <View style={styles.separator} />;
