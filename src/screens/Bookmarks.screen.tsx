import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function BookmarksScreen() {
    return (
        <View>
            <Text style={styles.textPadding}>Bookmarks</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textPadding: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})