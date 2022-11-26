import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export const createData = async (name:string, data:object) => {
    const jsonValue = JSON.stringify(data);
   const response =  await AsyncStorage.setItem(name, jsonValue);
   return response
}

export const sendData = async (name:string, data:object) => {
    const jsonValue = JSON.stringify(data);
   const response =  await AsyncStorage.mergeItem(name, jsonValue);
   return response
}

export const fetchData = async (name:string) =>{
        const DataString= await AsyncStorage.getItem(name)
        const data =  DataString != null ? JSON.parse(DataString) : null;
return data
      }
export const clearAll  = async () =>{
    await AsyncStorage.clear()
      }