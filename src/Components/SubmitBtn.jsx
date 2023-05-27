import { 
  Text, 
  TouchableOpacity, 
  StyleSheet } from "react-native";

export const SubmitBtn = ({ text, handleSubmit }) => {
  return (
    <TouchableOpacity style={submitBtnStyles.btn} activeOpacity={0.7} onPress={handleSubmit}>
      <Text style={submitBtnStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const submitBtnStyles = StyleSheet.create({
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 32,
  },
  btnText: {
    padding: 16,
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
