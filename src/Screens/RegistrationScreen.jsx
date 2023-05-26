import React from 'react';
import { 
  Keyboard, 
  ImageBackground, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View } from 'react-native';

export default function RegistrationScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isKeyboardShow, setIsKeyboardShow] = React.useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const keyboardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsKeyboardShow(true);
  };

  const handleBlur = () => {
    setIsKeyboardShow(false);
  };

  return (
    <ImageBackground source={require('../../assets/images/PhotoBG.jpg')} style={styles.backgroundImage}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.avatarContainer}>
            <View style={styles.avatar} />
          </View>
          <View style={styles.form}>
            <Text style={styles.title}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={handleNameChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={handleShowPassword}>
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
            {!isKeyboardShow && (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have account?</Text>
              <TouchableOpacity>
                <Text style={styles.loginButton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "stretch",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  avatarContainer: {
    position: "absolute",
    display: "flex",
    top: -60,
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    padding: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  passwordInput: {
    padding: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 16,
    bottom: 0,
    height: '70%',
  },
  showPasswordButtonText: {
    color: '#1B4371',
  },
  button: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    marginTop: 43,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    marginRight: 10,
  },
  loginButton: {
    color: '#2196F3',
  },
});