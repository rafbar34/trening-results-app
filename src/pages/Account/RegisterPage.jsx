import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../constants/localStorageKeys';
import { createData, fetchData } from '../../services/localStorageServices';
import { setName, setAge, setWeight, setHeight, setLevel, setActivity } from '../../features/RegisterInformations/RegisterInformations';


export const RegisterPage = () => {

    const data = useSelector((state) => state.informations)
    const dispatch = useDispatch();

    const handleChanges = (e, state) => {
        dispatch(state(e))
    }
    const registerInformations = [
        { title: 'name', changer: setName, handleChange: handleChanges, type: 'text', value: data.name },
        { title: 'age', changer: setAge, handleChange: handleChanges, type: 'numeric', value: data.age },
        { title: 'weight', changer: setWeight, handleChange: handleChanges, type: 'numeric', value: data.weight },
        { title: 'height', changer: setHeight, handleChange: handleChanges, type: 'numeric', value: data.height },
        { title: 'level', changer: setLevel, handleChange: handleChanges, type: 'numeric', value: data.level },
        { title: 'activity', changer: setActivity, handleChange: handleChanges, type: 'numeric', value: data.activity }
    ]
    const handleSubmit = (data) => {
        createData(register, data);
        fetchData(register);
    }

    return (
        <View
            style={{
                height: "100%",
                backgroundColor: 'black',
            }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '20%' }}><Text style={{ color: 'white', fontSize: 18 }}>Logo</Text></View>
            {registerInformations.map((registerInformation) =>
            (
                <View key={registerInformation.title} style={{
                    height: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10%',
                    flexDirection: 'row'

                }}>
                    <Text style={{ color: 'white', width: '30%', fontSize: 18, }}>
                        {registerInformation.title}:
                    </Text>
                    <TextInput
                        style={{
                            height: 40,
                            width: '50%',
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                            color: 'white',
                        }}
                        onChangeText={(e) => registerInformation.handleChange(e, registerInformation.changer)}
                        value={registerInformation.value}
                        placeholder={`please enter your ${registerInformation.title}`}
                        placeholderTextColor="#FFF"
                        keyboardType={registerInformation.type}
                    />
                </View>))}
            <View style={{ marginTop: 40 }}>
                <Button title='Submit' onPress={() => handleSubmit(data)} />
            </View>
        </View>
    )
}