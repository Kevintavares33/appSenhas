import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../hooks/useStorange';
import { PasswordItem } from './components/passworditem';

export function PassWords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem,removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass")
      setListPasswords(passwords);
    } 
     loadPasswords();
  }, [focused]);



async function handleDeletePasswords(item){
  const passwords = await removeItem("@pass",item)
  setListPasswords(passwords)

}


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.titlee}>Minhas Senhas</Text>
      </View>

    <View style={styles.content}>
    <FlatList style={{flex:1,paddingTop:14,}}

    data={listPasswords}
    keyExtractor={(item) => String(item) }
    renderItem={({item})=> <PasswordItem data={item} removePassword={()=> handleDeletePasswords(item)} />}
    />
         
        
        
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "grey",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  titlee: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  passwordItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  content:{
    flex:1,
    paddingLeft:14,
    paddingRight:14,
  }
});
