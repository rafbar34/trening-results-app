import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { register } from '../../constants/localStorageKeys';
import { createData, fetchData } from '../../services/localStorageServices';


export const RegisterPage = () => {
    const info = useSelector((state) => state.informations)
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [level, setLevel] = useState();
    const [activity, setActivity] = useState();

    const informations = [
        { title: 'name', changer: setName, placeholder: info.name, type: 'text', value: name },
        { title: 'age', changer: setAge, placeholder: info.age, type: 'numeric', value: age },
        { title: 'weight', changer: setWeight, placeholder: info.weight, type: 'numeric', value: weight },
        { title: 'height', changer: setHeight, placeholder: info.height, type: 'numeric', value: height },
        { title: 'level', changer: setLevel, placeholder: info.level, type: 'numeric', value: level },
        { title: 'activity', changer: setActivity, placeholder: info.activity, type: 'numeric', value: activity }
    ]
    console.log(informations)
    const data = {
        name: name,
        age: age,
        weight: weight,
        height: height,
        level: level,
        activity: activity
    }
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
            {informations.map((information) =>
                <View key={information.title} style={{
                    height: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '10%',
                    flexDirection: 'row'

                }}>
                    <Text style={{ color: 'white', width: '30%', fontSize: 18, }}>
                        {information.title}:
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
                        onChangeText={information.changer}
                        value={information.value}
                        placeholder={information.placeholder}
                        keyboardType={information.type}
                    />
                </View>)}
            <Button title='test' onPress={() => handleSubmit(data)} />
        </View>
    )
}