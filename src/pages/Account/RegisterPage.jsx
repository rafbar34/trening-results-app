import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export const RegisterPage = () => {
    const [name, setName] = React.useState('enter name');
    const informations = [{firstName:{title:'name', changer:setName, placeholder:name}},
    {firstName:{title:'age', changer:setName, placeholder:name}},
    {firstName:{title:'weight', changer:setName, placeholder:name}},
    {firstName:{title:'height', changer:setName, placeholder:name}},
    {firstName:{title:'level', changer:setName, placeholder:name}},
    {firstName:{title:'activity', changer:setName, placeholder:name}}]
    console.log(name);
    return (
        <View
            style={{
                height: "100%",
                backgroundColor: 'black',
            }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '20%' }}><Text style={{ color: 'white', fontSize: 18 }}>Logo</Text></View>
            {informations.map((information)=><View style={{
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10%',
                flexDirection: 'row'

            }}>
                <Text style={{ color: 'white', width: '30%', fontSize: 18, }}>{information.firstName.title}:</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: '50%',
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color: 'white',
                    }}
                    onChangeText={information.firstName.changer}
                    keyboardType='numeric'
                    value={information.firstName.placeholder}
                />
            </View>)}
        </View>
    )
}