import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function About({ route }: any) {
    return (
        <View style={style.layout} >
            <Text style={style.title} >THIS IS ABOUT PAGE</Text>
            <Text style={style.text} >ini adalah params yang di kirim dari home : </Text>
            <Text style={style.text} >{route.params.name}</Text>
            <Text style={style.text} >{route.params.age}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    layout: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    },
})