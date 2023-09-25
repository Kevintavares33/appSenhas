import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalPass } from './components/modal';

let senhasCreator = "abcdefghijKlmnopqrswtuvxyzABCDEFGHIJKLMNOPKRSWTUVXYZ0123456789"


export default function App() {
  const [size, setSize] = useState(6)
  const [passWordValue , setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  
  const generatePassword = () => {
      
      let password= "";
      for(let i = 0, n = senhasCreator.length; i < size; i++){
        password += senhasCreator.charAt(Math.floor(Math.random()* n ))
      }
  

      setPasswordValue(password)
      setModalVisible(true); 
}


  return (
    <View style={styles.container}>
      <Image
      source={require("./assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}> {size} caracteres</Text>
    
    <View style={styles.area}> 
    
    <Slider
    style={{ height: 50}}
    minimumValue={6}
    maximumValue={33}
    maximumTrackTintColor='red'
    minimumTrackTintColor='blue'
    thumbTintColor='red'
    value={size}
    onValueChange={(value) => setSize(value.toFixed(0))}
    />
    </View>
    
    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <ModalPass password={passWordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom:60,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  area: {
    marginTop: 14,
    marginBottom:14,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    },
    button: {
      backgroundColor: "blue",
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
    },
    buttonText: {
    color: "white",
    fontSize: 20

      }
});
