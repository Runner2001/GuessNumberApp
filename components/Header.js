import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ headerTitle }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{headerTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 56,
        backgroundColor: '#323232',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    }
})

export default Header