import React, { useState, useEffect } from "react";
import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Header } from "../Components/Header";
import { SubmitBtn } from "../Components/SubmitBtn";
import Toast from "react-native-root-toast";

import { mainStyles } from "./MainStyles";
const { screenWrap, main, photoWrap, cameraBtn, photoText, createInput, createInputIcon, createLocationWrap, trashWrap, trashBtn,} = mainStyles;

const initialFormState = {
  name: "",
  locationDesc: "",
};

const initialFocusState = {
  name: false,
  locationDesc: false,
};

export const CreatePostScreen = ({ navigation }) => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [onFocus, setOnFocus] = useState(initialFocusState);
  const [formState, setFormState] = useState(initialFormState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => { (async () => {
            await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            await Location.requestForegroundPermissionsAsync();
            }) (); }, [] );

  useEffect(() => { async () => {}; }, [photo]);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setPhoto(uri);
    const location = await Location.getCurrentPositionAsync();
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const handleFocus = (inputName) => {
    setIsKeyboardShow(true),
      setOnFocus((prevState) => ({ ...prevState, [inputName]: true }));
  };

  const outFocus = (inputName) => {
    setOnFocus((prevState) => ({ ...prevState, [inputName]: false }));
    setIsKeyboardShow(false);
  };

  const handleSubmit = async () => {
    const { name, locationDesc } = formState;
    const { latitude, longitude } = location;

    if (!name || !locationDesc || !photo) {
      Toast.show("Please, fill out the form completely");
      return;
    }
    console.log('photo:', photo);
    console.log('name:', name);
    console.log('location:', location);
    console.log('locationDesc:', locationDesc);

    navigation.navigate("Posts", { photo, name, locationDesc, latitude, longitude, });
    setFormState(initialFormState);
    setPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" && "padding"}>
      <View style={screenWrap}>
          <Header title="Create POST" />
          <ScrollView>
            <View style={main}>
              <View>
                <View>
                  {!photo 
                  ? ( <Camera style={photoWrap} ref={setCamera}>
                        <TouchableOpacity style={cameraBtn} onPress={() => { takePhoto(); }} >
                          <AntDesign name="camera" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                      </Camera>)
                  : (   <TouchableOpacity onPress={() => setPhoto(null)}>
                        <Image source={{ uri: photo }} style={photoWrap} />
                        </TouchableOpacity>)}
                </View>
                  <Text style={photoText}> {!photo ? "Make photo" : "Edit photo"} </Text>
              </View>
              <View style={{ gap: 16 }}>
                <TextInput  style={{ ...createInput, borderBottomColor: onFocus.name ? "#FF6C00" : "#BDBDBD", }}
                            placeholder="Name..."
                            placeholderTextColor={"#BDBDBD"}
                            onFocus={() => handleFocus("name")}
                            onEndEditing={() => outFocus("name")}
                            value={formState.name}
                            onChangeText={ (value) => setFormState((prevState) => ({ ...prevState, name: value, })) }
                />
                <View style={createLocationWrap}>
                <TextInput  style={ { ...createInput, paddingLeft: 28, borderBottomColor: onFocus.location ? "#FF6C00" : "#BDBDBD", } }
                            placeholder="Place..."
                            placeholderTextColor={"#BDBDBD"}
                            onFocus={() => handleFocus("locationDescription")}
                            onEndEditing={() => outFocus("locationDescription")}
                            value={formState.locationDesc}
                            onChangeText={(value) => setFormState((prevState) => ({ ...prevState, locationDesc: value, } ) ) }
                />
                <EvilIcons style={createInputIcon} name="location" size={25} color="#BDBDBD" />
              </View>
              </View>
              {!isKeyboardShow && <SubmitBtn text="POST" handleSubmit={handleSubmit} />}
            </View>
          </ScrollView>
          <View style={trashWrap}>
            { !isKeyboardShow && (
                <TouchableOpacity style={trashBtn} onPress={() => { setFormState(initialFormState); setPhoto(null);}}>
                <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
                </TouchableOpacity>) }
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};