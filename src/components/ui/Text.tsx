import React from 'react'
import { Text as RNText, StyleProp, ViewStyle, TextStyle } from 'react-native'

import { globalStyles as gs } from '../../styles/GlobalStyles'

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