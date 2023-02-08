import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Styles/Style";

export default function Home(props) {
  const navigation = props.navigation;
  // const [data, setData] = useState({
  //   name: "Lục Anh Tài",
  //   phone: "0931360954",
  //   email: "tailaph26495@fpt.edu.vn",
  //   majors: "Lập trình mobile",
  //   birthday: "15/04/2003",
  // });

  const data = {
    name: "Lục Anh Tài",
    phone: "0931360954",
    email: "tailaph26495@fpt.edu.vn",
    majors: "Lập trình mobile",
    birthday: "15/04/2003",
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icComputer.png")}
        style={styles.icEditInfo}
      />
      <Pressable
        android_ripple={{ color: "#a6e6facc" }}
        style={styles.buttonNext}
        onPress={() => navigation.navigate("Profile", { data })}
      >
        <Text style={styles.textButton}>Thông tin cá nhân</Text>
      </Pressable>
    </View>
  );
}
