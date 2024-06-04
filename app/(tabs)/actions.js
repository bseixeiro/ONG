import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [ba, setBa] = useState("")
  const [bas, setBas] = useState([])

  const handleclick = () => {
    setBas([...bas, ba])
    console.log(bas)
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
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  form: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#6DC5D1",
    borderWidth: 1,
    borderRadius: 5,
  },
  div: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: (Dimensions.get("screen").height * 0.2)
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