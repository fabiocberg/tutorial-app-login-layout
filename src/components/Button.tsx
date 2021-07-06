import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text, ViewStyle, StyleProp } from 'react-native'

export interface ButtonProps {
    style?: StyleProp<ViewStyle>
    children?:React.ReactNode
}

const Button = ({style, children}: ButtonProps) => {
    return (
        <LinearGradient style={[styles.container, style]} colors={['#56C143', '#284F21']}>
            <Text style={styles.label}>{children}</Text>    
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
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

export default Button