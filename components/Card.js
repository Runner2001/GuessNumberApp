import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ style, children }) => {
    return (
        <View style={{ ...styles.cardStyle, ...style }}>{children}</View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#323232",
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 40
    }
})

export default Card