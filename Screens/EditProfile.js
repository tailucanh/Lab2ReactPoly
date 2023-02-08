import {
  View,
  Text,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { styles } from "../Styles/Style";
import InputText from "../Components/Inputs";

export default function EditProfile({ navigation, route }) {
  const { editableData } = route.params;
  const [data, setData] = useState(editableData);

  return (
    <View style={styles.containerEdit}>
      <Image
        source={require("../assets/images/icEdit.png")}
        style={styles.icEditInfo}
      />
      <InputText
        placeholder="Enter name"
        keyboardType="text"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />
      <InputText
        placeholder="Enter phone"
        keyboardType="numeric"
        value={data.phone}
        onChangeText={(text) => setData({ ...data, phone: text })}
      />
      <InputText
        placeholder="Enter email"
        keyboardType="email-address"
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
      />
      <InputText
        placeholder="Enter majors"
        keyboardType="text"
        value={data.majors}
        onChangeText={(text) => setData({ ...data, majors: text })}
      />
      <InputText
        placeholder="Enter birthday"
        keyboardType="date"
        value={data.birthday}
        onChangeText={(text) => setData({ ...data, birthday: text })}
      />
      <View style={styles.boxButton}>
        <Pressable
          android_ripple={{ color: "#d0eef7cc" }}
          style={styles.btnEdit}
          onPress={() => navigation.navigate("Profile", { data })}
        >
          <Text style={styles.textBtnEdit}>Save edit</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: "#c9c9c9cc" }}
          style={styles.btnCancel}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textBtnEdit}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}
