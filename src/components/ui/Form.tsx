import React from 'react'
import { useForm, Control, FieldValues, UseFormHandleSubmit, FieldErrors, Controller } from 'react-hook-form'
import { StyleSheet, View, Text, KeyboardTypeOptions } from 'react-native'
import { Input } from './Input'

export interface FormProps {
    children: React.ReactNode
}

export interface FormInputTemplateProps {
    placeholder?: string
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
    keyboardType?: KeyboardTypeOptions
    formProps: {control: Control<FieldValues>, errors: FieldErrors<FieldValues>}
    name: string
    secureTextEntry?: boolean
}

export const FormInputTemplate = ({
    name, 
    placeholder, 
    autoCapitalize, 
    keyboardType, 
    secureTextEntry, 
    formProps}: FormInputTemplateProps) => {
    return (
        <>
            <Controller
                control={formProps.control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input placeholder={placeholder}
                        autoCapitalize={autoCapitalize}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name={name}
                defaultValue=""
            />
            {formProps.errors[name] && <Text>Informe seu email.</Text>}
        </>
    )
}

const Form = ({children}: FormProps) => {

    // console.log(children)
    // if (true) {
    //     return null
    // }

    return (
        <>
            {children}
        </>
    )
}

export default Form