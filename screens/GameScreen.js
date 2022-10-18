import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import color from '../constant/color'
import { Ionicons } from '@expo/vector-icons'

const generatRandom = (min, max, exlude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNum = Math.floor((Math.random() * (max - min)) + min)

    if (randomNum === exlude) {
        return generatRandom(min, max, exlude)
    } else {
        return randomNum
    }
}


const GameScreen = ({ userValue, gameOverHandler }) => {
    const [currentGuess, setCurrentGuess] = useState(generatRandom(1, 100, userValue));
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userValue) {
            gameOverHandler(rounds)
        }
    }, [currentGuess, userValue, gameOverHandler])

    const nextGuessHandler = direction => {
        if ((direction === 'greater' && currentGuess > userValue) || (direction === 'lower' && currentGuess < userValue)) {
            Alert.alert('Don\t lie!', 'We know something is wrong...', [{ text: 'Sorry', style: "cancel" }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextGuess = generatRandom(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        setRounds(currRound => currRound + 1)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Text style={{ marginRight: 8 }}>
                        Oppunents Guess Value
                    </Text>
                    <Ionicons name="game-controller" size={24} color={color.danger} />
                </View>
                <Text style={{ fontSize: 32, fontWeight: '500', }}>{currentGuess}</Text>
                <View style={styles.buttonGroup}>
                    <View style={styles.standardButton}>
                        <Button title='Lower' color={color.primary} onPress={() => nextGuessHandler('lower')} />
                    </View>
                    <View style={styles.standardButton}>
                        <Button title='Higher' color={color.primary} onPress={() => nextGuessHandler('greater')} />
                    </View>
                </View>
            </View>
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
    container: {
        width: '100%',
        backgroundColor: color.background_color,
        alignItems: 'center',
        padding: 16,
        paddingVertical: 24,
        borderRadius: 10,
    },
    buttonGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 32
    },
    standardButton: {
        width: '48%',
    }
})

export default GameScreen