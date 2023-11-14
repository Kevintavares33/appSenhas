import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  // Buscar itens salvos
  const getItem = async (key) => {
    try {
      let password = await AsyncStorage.getItem(key);
      return JSON.parse(password) || [];
    } catch (error) {
      console.log("Este é o erro", error);
      return [];
    }
  };

  // Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("Erro ao salvar", error);
    }
  };

  // Remover algo do storage
  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);
      let myPasswords = passwords.filter((password) => password !== item);

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (error) {
      console.log("Erro ao deletar", error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
