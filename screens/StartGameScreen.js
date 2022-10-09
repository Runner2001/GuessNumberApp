import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import StartGame from '../components/StartGameCard'
import color from '../constant/color'

const StartGameScreen = () => {

    const [inputvalue, setInputvalue] = useState("00");
    const [comfirmed, setComfirmed] = useState(false);
    const [fianlvalue, setFianlvalue] = useState("");

    const inputHandler = (num) => {
        setInputvalue(num.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setInputvalue("00")
        setComfirmed(false)
    }

    const comfirmHandler = () => {
        const num = parseInt(inputvalue)
        if (isNaN(num) || num <= 0) {
            Alert.alert(
                'Invalid Number!',
                'Number shoud be between 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
            )
            return;
        } else {
            setFianlvalue(num)
            setComfirmed(true);
            setInputvalue("00")
            Keyboard.dismiss()
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textHeader}>Select Your Number: </Text>
                    <Input
                        style={styles.input}
                        keyboard="number-pad"
                        maxLength={2}
                        value={inputvalue}
                        onChangeText={inputHandler}
                    />

                    <View style={styles.buttonGroup}>
                        <View style={styles.standardButton}>
                            <Button title='Reset' color={color.danger} onPress={resetHandler} />
                        </View>
                        <View style={styles.standardButton}>
                            <Button title='Comfirm' color={color.primary} onPress={comfirmHandler} />
                        </View>
                    </View>
                </Card>
                {comfirmed ? <StartGame fianlvalue={fianlvalue} /> : ""}
            </View>
        </TouchableWithoutFeedback>
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
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 32
    },
    textHeader: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 16,
        color: color.black
    },
    buttonGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 32
    },
    input: {
        width: 100,
        fontSize: 32,
        textAlign: 'center'
    },
    standardButton: {
        width: '48%',
    }
})

export default StartGameScreen