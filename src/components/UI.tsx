import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextInput } from 'react-native'

/**
 * INPUT
 */
export interface InputProps {
    value?: string
    placeholder?: string
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean
}

export function Input ({value, placeholder, onChangeText, secureTextEntry}: InputProps) {
    return (
        <TextInput 
            style={inputStyles.container} 
            onChangeText={onChangeText} 
            placeholder={placeholder}
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

/**
 * BUTTON
 */
export interface ButtonProps {
    style?: StyleProp<ViewStyle>
    children?:React.ReactNode
}

export function Button ({style, children}: ButtonProps) {
    return (
        <LinearGradient style={[buttonStyles.container, style]} colors={['#56C143', '#284F21']}>
            <Text style={buttonStyles.label}>{children}</Text>    
        </LinearGradient>
    )
}

const buttonStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 4,
        paddingLeft: 16,
        paddingRight: 16,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

/**
 * CONTAINER
 */
export interface ContainerProps {
    style?: StyleProp<ViewStyle>
}

export default function Container ({style}: ContainerProps) {
    return (
        <View style={[containerStyles.container, style]}>
            <Text>Container</Text>
        </View>
    )
}

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
