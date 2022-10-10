import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import color from '../constant/color'

const StartGame = ({ fianlvalue, onStartHandler }) => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 16 }}>
                Your Input Value: <Text style={{ fontSize: 18, fontWeight: '500' }}>{fianlvalue}</Text>
            </Text>
            <View style={styles.standardButton}>
                <Button title='Start Game' color={color.primary} onPress={() => onStartHandler(fianlvalue)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: color.background_color,
        alignItems: 'center',
        padding: 16,
        paddingVertical: 24,
        borderRadius: 10,
    },
    standardButton: {
        width: '50%'
    }
})

export default StartGame