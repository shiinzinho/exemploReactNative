import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
function LoginScreen(): JSX.Element {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            password: password
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={require('../assets/images/user.png')}/>

            <View style={styles.card}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={"#151413"} onChangeText={(textEmail) => setEmail(textEmail)}/>
                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"#151413"} onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry/>
                <TouchableOpacity style={styles.button} onPress={() => {login()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#061153'
    },
    card:{
        backgroundColor: "#061781",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    logo:{
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0035FA'


    },
    button: {
        backgroundColor: '#2009E2',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#151413',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold'
        
    },
    forgotPassword: {
        color: '#5174FF',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default LoginScreen;