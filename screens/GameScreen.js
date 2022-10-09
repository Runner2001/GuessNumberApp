import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const generatRandom = (min, max, exlude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNum = Math.floor((Math.random() * (min - max)) + min)

    if (randomNum === exlude) {
        return generatRandom(min, max, exlude)
    } else {
        return randomNum
    }
}

const GameScreen = ({ userValue }) => {
    const [currentGuess, setCurrentGuess] = useState(generatRandom(1, 100, userValue));

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})

export default GameScreen