import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen() {
  const [ba, setBa] = useState("")
  const [bas, setBas] = useState([])

  const handleclick = () => {
    if (ba != ""){
      setBas([...bas, ba])
      setBa("")
    }
  }
  const handleSuppress = (index) => {
    const copy = [...bas]
    copy.splice(index, 1)
    setBas(copy)
  }

  return (
    <ScrollView styles={styles.container}>
      <View style={styles.form}>
      <TextInput
          style={styles.input}
          value={ba}
          placeholder="Entrez votre bonne action"
          keyboardType="default"
          onChangeText={setBa}
        />
        <TouchableOpacity style={styles.button} onPress={handleclick}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {bas.map((b, index) => {
        return (
          <View style={styles.li} key={index}>
            <Text style={styles.item}>{b}</Text>
            <TouchableOpacity style={styles.buttonBis} onPress={() => handleSuppress(index)}>
              <Ionicons name="trash-bin-sharp" size={20} color="black" />
            </TouchableOpacity>
          </View>
        );
      })}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  item: {
    width: (Dimensions.get("screen").width * 0.7),
  },
  form: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  li: {
    width: (Dimensions.get("screen").width * 0.9),
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 5,
    marginLeft: 15,
  },
  div: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: (Dimensions.get("screen").width * 0.5)
  },
 
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
    margin: 10,
    width: (Dimensions.get("screen").width * 0.9),
  },
 
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
    width: "80vw",
  },
  buttonBis: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 13,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    margin: 15,
    textAlign: "center",
  },
})