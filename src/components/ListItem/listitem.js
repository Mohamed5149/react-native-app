import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.pressHandler}>
            <View style={styles.ListItem}>
                <Text>{props.city}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    ListItem: {
        width: "100%",
        backgroundColor: 'orange',
        marginBottom: 5
    }
})

export default ListItem;