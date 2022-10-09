import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import color from '../constant/color'

const Input = ({ style, placeholder, keyboard, ...others }) => {
    return (
        <TextInput {...others} style={{ ...styles.inputField, ...style }} placeholder={placeholder} keyboardType={keyboard} />
    )
}

const styles = StyleSheet.create({
    inputField: {
        height: 56,
        borderBottomColor: color.black,
        borderBottomWidth: 1
    }
})

export default Input