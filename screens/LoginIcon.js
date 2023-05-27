import * as React from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import PagLogin from "../components/PagLogin";
import { useNavigation } from '@react-navigation/native';
import CadastroIcon from "../screens/CadastroIcon";


const LoginIcon = () => {

  const navigation = useNavigation();

  const cadastro = () => {
    navigation.navigate('CadastroIcon');
  };

  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <PagLogin />
    </ImageBackground>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  loginIcon: {
    flex: 1,
    width: "100%",
    height: deviceHeight,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 43,
    alignItems: "center",
  },
});

export default LoginIcon;
