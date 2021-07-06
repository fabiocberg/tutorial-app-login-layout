import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'

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