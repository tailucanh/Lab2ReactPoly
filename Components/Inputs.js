import { TextInput } from "react-native";
import { styles } from "../Styles/Style";

const InputText = ({ value, onChangeText, placeholder, keyboardType }) => (
  <TextInput
    style={styles.textInput}
    value={value}
    keyboardType={keyboardType}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);

export default InputText;
