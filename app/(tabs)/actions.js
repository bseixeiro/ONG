import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "../../style/global-style";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <TextInput />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
