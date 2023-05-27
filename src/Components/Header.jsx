import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerTitle}>{title}</Text>
      {title === "POSTS" 
        ? (
            <TouchableOpacity style={headerStyles.logOutBtn} onPress={() => navigation.navigate("Login")}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>) 
        : (
            <TouchableOpacity style={headerStyles.backBtn} onPress={() => navigation.navigate("Posts")}>
              <AntDesign name="arrowleft" size={24} />
            </TouchableOpacity>)
      }
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    display: "flex",
    paddingTop: 55,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingBottom: 11,
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
  backBtn: {
    position: "absolute",
    left: 10,
    top: 55,
  },
  logOutBtn: {
    position: "absolute",
    right: 10,
    top: 55,
  },
})