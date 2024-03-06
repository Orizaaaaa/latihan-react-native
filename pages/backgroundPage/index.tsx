import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

export default function BackgroundPage() {
    return (
        <View >
            <ImageBackground source={require('../../assets/deadpool2.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.overlay}>
                    <Text style={styles.text}>BackgroundPage</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 45,
        fontWeight: 'bold',
    },
});
