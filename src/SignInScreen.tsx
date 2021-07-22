import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Image 
} from 'react-native'

import Container, {Button, Input, Text} 
    from './components/ui'
import Form, { FormInputTemplate } from './components/ui/Form'

import { 
    globalStyles as gs 
} from './styles/GlobalStyles'

export interface SignInScreenProps {
}

const SignInScreen = () => {

    const { control, handleSubmit, formState: { errors } } = useForm()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const onSubmit = (data: any) => {
        console.log(data);
    }

    const formProps = {
        control,
        errors
    }

    return (
        <>
            <Image style={styles.top} source={require('../assets/top.png')} />
            <Container>
                <Text isTitle style={styles.title}>Login</Text>
                <Text style={styles.message}>Bem vindo!</Text>
                {/* FORM */}
                <Form>
                    {/* EMAIL */}
                    <FormInputTemplate 
                        name="email"
                        placeholder='Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        formProps={formProps}
                    />
                    {/* SENHA */}
                    <FormInputTemplate 
                        name="password"
                        placeholder='Senha' 
                        secureTextEntry
                        autoCapitalize='none'
                        formProps={formProps}
                    />
                </Form>


                {/* SCREEN BUTTONS */}
                <View style={styles.containerEnterButtons}>
                    <Button style={styles.containerEnterItem} 
                        onPress={handleSubmit(onSubmit)}>
                            Entrar
                    </Button>
                    <Text style={[styles.containerEnterItem, styles.forgotPass, gs.text]}>Esqueceu a senha?</Text>
                </View>
                <View style={styles.containerRegister}>
                    <Text style={gs.text}>Não tem uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={[gs.text, styles.linkRegister]}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        marginBottom: 10,
    },
    message: {
        width: '100%',
        marginBottom: 40,
    },
    containerEnterButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    containerEnterItem: {
        flexGrow: 1,
    },
    forgotPass: {
        textAlign: 'right',
    },
    containerRegister: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 120,
    },
    linkRegister: {
        fontWeight: 'bold',
        color: '#56c143'
    },
    top: {
        position: 'absolute',
        width: '100%',
        height: undefined,
        resizeMode: 'contain',
        top: -50,
        aspectRatio: 1,
    }
})

export default SignInScreen