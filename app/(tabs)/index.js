import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import logo from "../../assets/logo.png"
import planete from "../../assets/planete.jpg"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={logo}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.label}>Bienvenue sur l'application de notre association !</Text>
      <Image 
        source={planete}
        // resizeMode="contain"
        style={styles.imgBis}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").height * 0.15),
    padding: 20,
  },
  imgBis: {
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").height* 0.4),
    padding: 20,
    marginTop: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
})
