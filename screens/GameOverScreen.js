import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import color from '../constant/color'

const GameOverScreen = ({ round, restartGame }) => {
    return (
        <View style={styles.screen}>
            <Text style={{ fontSize: 32, fontWeight: '600', color: color.danger }}>The Game Is Over</Text>
            <Text style={{ fontSize: 16, marginTop: 8, marginBottom: 32 }}>Number of guess round: {round}</Text>
            <Button title='Restart' onPress={restartGame} color={color.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default GameOverScreen
