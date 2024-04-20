import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/icon.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>

            <View style={styles.loginBtn}>

            </View>
            <View style={styles.regBtn} >

            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;




//Styling Section
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    loginBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },

    regBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },

    logo: {
        width: 100,
        height: 100,
    },

    logoContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    }
})