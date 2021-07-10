import React from 'react'
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData } from 'react-native'

export interface InputProps {
    value?: string
    placeholder?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
    keyboardType?: KeyboardTypeOptions
    onChangeText?: (text: string) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    secureTextEntry?: boolean
}

export function Input ({value, placeholder, autoCapitalize, keyboardType, 
    onChangeText, onBlur, secureTextEntry}: InputProps) {
    return (
        <TextInput 
            style={inputStyles.container} 
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onChangeText={onChangeText} 
            placeholder={placeholder}
            value={value}
            placeholderTextColor='#747474'
            secureTextEntry={secureTextEntry}
        />
    )
}

const inputStyles = StyleSheet.create({
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