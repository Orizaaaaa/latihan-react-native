import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    name: string,
    age: number,
    email: string
}

const style = StyleSheet.create({
    list: {
        backgroundColor: 'green',
        marginTop: 10,
    },
    user: {
        color: 'white'
    }
})

export default function ProfileUser({ name, age, email }: Props) {
    return (
        <View style={style.list} >
            <Text style={style.user} >Nama : {name} </Text>
            <Text style={style.user}>Umur : {age}</Text>
            <Text style={style.user}>Email : {email} </Text>
        </View>
    )
}