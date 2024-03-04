import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import colours from '../constants/colours';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.white,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        borderRadius: 5, 
    },
    button: {
        padding: 15,
        borderRightColor: colours.border,
        borderRightWidth: 1,
        backgroundColor: colours.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: colours.blue,
        fontWeight: "bold",
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colours.textLight,
    },
    containerDisabled: {
        backgroundColor: colours.offWhite,
    },

});
export const ConversionInput = ({text, onButtonPress, ...props}) => {
    const containerStyles = [styles.container];

    if (props.editable === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.button}>{text}</Text>
                <TextInput style={styles.input} {...props}/>
            </View>
        )
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress} >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props}/>
        </View>
    )
};