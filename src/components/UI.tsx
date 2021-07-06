import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text as RNText, StyleProp, ViewStyle, TextStyle, TextInput } from 'react-native'

import { globalStyles as gs } from '../styles/GlobalStyles'

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
            <RNText style={buttonStyles.label}>{children}</RNText>    
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
 * TEXT
 */
export interface TextProps {
    children:React.ReactNode
    style?: StyleProp<ViewStyle | TextStyle>
    isTitle?: boolean
}

export function Text ({children, style, isTitle}: TextProps) {
    return (
        <RNText style={[isTitle ? gs.title : gs.text, style]}>
            {children}
        </RNText>
    )
}

/**
 * CONTAINER
 */
export interface ContainerProps {
    children?:React.ReactNode
    style?: StyleProp<ViewStyle>
}

export default function Container ({children, style}: ContainerProps) {
    return (
        <View style={[containerStyles.container, style]}>
            {children}
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
