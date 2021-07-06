import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Button from './components/Button'
import Input from './components/Input'

import { globalStyles as gs } from './styles/GlobalStyles'

export interface SignInScreenProps {
}

const SignInScreen = () => {
    return (
        <>
            <Image style={styles.top} source={require('../assets/top.png')} />
            <View style={styles.container}>
                <Text style={[gs.title, styles.title]}>Login</Text>
                <Text style={[gs.text, styles.message]}>Bem vindo!</Text>
                <Input placeholder='Email' />
                <Input placeholder='Senha' secureTextEntry />
                <View style={styles.containerEnterButtons}>
                    <Button style={styles.containerEnterItem}>Entrar</Button>
                    <Text style={[styles.containerEnterItem, styles.forgotPass, gs.text]}>Esqueceu a senha?</Text>
                </View>
                <View style={styles.containerRegister}>
                    <Text style={gs.text}>Não tem uma conta?</Text>
                    <TouchableOpacity>
                        <Text style={[gs.text, styles.linkRegister]}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
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