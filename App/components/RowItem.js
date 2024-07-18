import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
    row: {
        paddingVertical: 16, 
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }, 
    text: {
        fontSize: 16,
        color: colors.text
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
});
export const RowItem = ({ title, rightIcon, onPress }) => {
    return(
    <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        {rightIcon}
    </TouchableOpacity>
    );
};

export const RowSeparator = () => <View style={styles.separator} />;
