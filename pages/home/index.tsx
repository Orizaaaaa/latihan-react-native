
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput, ActivityIndicator, Switch, Modal } from 'react-native';
import React, { useEffect } from 'react';
import ProfileUser from '../../components/elements';
import { getProfile } from '../../service/service';
import { Picker } from '@react-native-picker/picker';


declare function alert(message?: any): void;
const sayHai = () => {
    alert('Hallo Bastard');
};

const buttonList = (item: string) => {
    alert(item);
}

const Home = ({ navigation }: any) => {
    // list data button
    const [list, setList] = React.useState([
        { id: 1, name: 'Deadpool' },
        { id: 2, name: 'Captain America' },
        { id: 3, name: 'Spiderman' }
    ]);


    // input user
    const [input, setInput] = React.useState({
        username: '',
        password: ''
    });

    const handleChange = (name: string, text: string) => {
        setInput({ ...input, [name]: text });
    };

    // data from api
    const [user, setUser] = React.useState({
        first_name: '',
        avatar: '',
        email: ''
    });

    // indicator loading 
    const [loading, setLoading] = React.useState(false);


    // picker
    const [picker, setPicker] = React.useState()

    // switch
    const [switchOn, setSwitchOn] = React.useState(false)


    // modal
    const [modalVisible, setModalVisible] = React.useState(false)
    return (
        <ScrollView>
            <View>
                <Text style={style.tulisan}>
                    <Text style={style.italic}> Selamat datang</Text> di
                    aplikasi pertama saya
                </Text>
                <Image
                    source={require('../../assets/deadpool.png')}
                    style={style.image}
                />
                <Button title="Punch Me" onPress={sayHai} />
                <TouchableOpacity onPress={sayHai} style={style.touchButton}>
                    <Text style={style.textTouchButton} >PUNCH ME ALSO</Text>
                </TouchableOpacity>

                <View style={style.parentFlex} >
                    <Text style={style.boxYellow} >1</Text>
                    <Text style={style.boxGreen} >2</Text>
                    <Text style={style.boxRed} >3</Text>
                </View>

                <View >
                    {list.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => buttonList(item.name)} >
                            <Text style={style.list} key={item.id}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <ProfileUser name="Abdul" age={20} email="oryzasativa@gmail.com" />
                <View>
                    <Text style={style.resultInput} > nama kamu adalah : {input.username}</Text>
                    <Text style={style.resultInput} > password kamu adalah : {input.password}</Text>
                    <TextInput value={input.username} onChangeText={(text) => handleChange('username', text)} style={style.textInput} placeholder="Username" />
                    <TextInput value={input.password} onChangeText={(text) => handleChange('password', text)} style={style.textInput} placeholder="Password" />
                </View>

            </View>

            <View>
                <Text style={style.titleFitur} > FETCHING DATA FROM API </Text>
                {user.avatar ? (<Image style={style.imageFetch} source={{ uri: user.avatar }} />) : null}
                <Text > {user.first_name} </Text>
                <Text > {user.email} </Text>
                <Button title="GET DATA" onPress={() => getProfile((data: any) => setUser(data.data))} />
            </View>

            <View>
                <Text style={style.titleFitur} > NAVIGATION</Text>
                <View style={style.navigation} >
                    <Button title='Pergi ke About' onPress={() => navigation.navigate('About', {
                        name: 'Abdul',
                        age: 20
                    })} />
                </View>

                <View style={style.navigation} >
                    <Button title='Pergi ke Webview' onPress={() => navigation.navigate('Webview')} />
                </View>
            </View>

            <View>
                <Text style={style.titleFitur} > lOADING</Text>
                {loading ? <ActivityIndicator size="large" color="red" /> : null}
                <Button title={loading ? 'hentikan loading' : 'aktifkan loading'} onPress={() => setLoading(!loading)} />
            </View>

            <View>
                <Text style={style.titleFitur} > PICKER</Text>
                <Picker selectedValue={picker} onValueChange={(item,) => setPicker(item)}>
                    <Picker.Item label='Senin' value={'senin'} />
                    <Picker.Item label='Selasa' value={'selasa'} />
                    <Picker.Item label='Rabu' value={'rabu'} />
                </Picker>
            </View>

            <View>
                <Text style={style.titleFitur} > SWITCH</Text>
                <Switch style={{ alignSelf: 'center', }} onValueChange={() => setSwitchOn(!switchOn)} value={switchOn} />
            </View>

            <View>
                <Text style={style.titleFitur} > MODAL</Text>
                <Button title='Open Modal' onPress={() => setModalVisible(true)} />
                <Modal visible={modalVisible} animationType='fade' >
                    <View style={style.modal}>
                        <Text style={{ color: 'white', marginBottom: 10 }} >Modal</Text>
                        <Button title='Tutup Modal' onPress={() => setModalVisible(false)} />
                    </View>
                </Modal>
            </View>

        </ScrollView>
    );
};


const style = StyleSheet.create({
    // pengenalan style
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 200,
        width: '80%',
        borderRadius: 10,
        marginTop: 200,
        marginLeft: 40,
    },
    tulisan: {
        fontSize: 20
    },
    italic: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    image: {
        width: 350,
        height: 400
    },

    // button
    touchButton: {
        backgroundColor: 'red',
        padding: 10
    },
    textTouchButton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    // flex box
    parentFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    boxYellow: {
        width: 70,
        height: 70,
        backgroundColor: 'yellow'
    },
    boxGreen: {
        width: 70,
        height: 70,
        backgroundColor: 'green'
    },
    boxRed: {
        width: 70,
        height: 70,
        backgroundColor: 'red'
    },

    // state dan list
    list: {
        marginTop: 5,
        width: '100%',
        padding: 10,
        backgroundColor: 'black',
        color: 'white'
    },

    // text input 
    textInput: {
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: '60%',
        alignSelf: 'center',
        padding: 10,
        borderColor: 'black',
    },
    resultInput: {
        color: 'black',
        marginTop: 10,
    },
    titleFitur: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    imageFetch: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 100
    },
    navigation: {
        marginTop: 10,
    }
})


export default Home