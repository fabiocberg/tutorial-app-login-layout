import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text as RNText, StyleProp, ViewStyle } from 'react-native'

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