import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text as RNText, StyleProp, ViewStyle, TouchableOpacity, GestureResponderEvent } from 'react-native'

export interface ButtonProps {
    style?: StyleProp<ViewStyle>
    children?:React.ReactNode
    onPress?: (event: GestureResponderEvent) => void;
}

export function Button ({style, children, onPress}: ButtonProps) {
    return (
        <TouchableOpacity style={[buttonStyles.container, style]} onPress={onPress}>
            <LinearGradient style={[buttonStyles.gradient, {width: '100%', height: '100%'}]} colors={['#56C143', '#284F21']}>
                <RNText style={buttonStyles.label}>{children}</RNText>    
            </LinearGradient>
        </TouchableOpacity>
        
    )
}

const buttonStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 4,
    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 4,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})