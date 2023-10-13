import * as Clipboard from "expo-clipboard";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

 export function ModalPass({password, handleClose}){

async function handleCopyPassword (){
  await Clipboard.setStringAsync(password)
alert("Senha Copiada!")
handleClose(); 
}

     return(
    <View style = {styles.container}>
      <View style = {styles.content}>
            <Text style = { styles.titulo}> Sua Senha </Text>

           <Pressable style= {styles.innerPass} onLongPress={handleCopyPassword}>
            <Text style= {styles.textPass}> 
                {password}
            </Text>
           </Pressable>
        
           <View style={styles.buttonArea}>
             <TouchableOpacity style= {styles.button} onPress={handleClose}>
                <Text style={styles.buttonText}> Voltar </Text> 
              </TouchableOpacity>

              <TouchableOpacity style= {[styles.button,  styles.buttonSave]}>
                <Text style={styles.buttonSaveText }> Salvar Senha</Text>
              </TouchableOpacity>
            </View>

        </View>
          
    </View>


     )
 }

 const styles = StyleSheet.create({
    container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    },
    content: {
    backgroundColor: "white",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
    },
    titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 24
    },
    innerPass: {
    backgroundColor: "red",
    width: "90%",
    padding: 14,
    borderRadius: 8
    },
    textPass: {
    color: "white",
    textAlign : "center"
    },
    button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    },
    buttonText: {
    
    },
    buttonArea: {
        flexDirection:"row",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttonSave: {
        backgroundColor: "blue",
        borderRadius: 8,
        marginRight: 19
    },
    buttonSaveText: {
    color: "white",
    fontWeight: "bold"
    }

   

 })