import React from "react";
import {
  Image,
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
import { Header } from "../Components/Header";

import { mainStyles } from "./MainStyles";
const { main, userAva, userInfo, userData, userLogin, userMail } = mainStyles;

export const PostsScreen = () => {
  return (
    <>
      <Header title="POSTS" />
      <View style={main}>
        <View style={userData}>
          <View style={userAva}>
            <Image source={require ("../../assets/images/108401183.png")} style={userAva}/>
          </View>
          <View style={userInfo}>
            <Text style={userLogin}>Alena</Text>
            <Text style={userMail}>myMail@mail.ua</Text>
          </View>
        </View>
      </View>
    </>
  );
};
