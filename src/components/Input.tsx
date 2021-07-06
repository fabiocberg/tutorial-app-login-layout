import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export interface InputProps {
    value?: string
    placeholder?: string
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean
}

const Input = ({value, placeholder, onChangeText, secureTextEntry}: InputProps) => {
    return (
        <TextInput 
            style={styles.container} 
            onChangeText={onChangeText} 
            placeholder={placeholder}
            placeholderTextColor='#747474'
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 4,
        paddingLeft: 20,
        fontSize: 16,
        marginBottom: 18,
    },
})

export default Input