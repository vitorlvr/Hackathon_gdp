import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import PagLogin from "../components/PagLogin";

const LoginIcon = () => {
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

const styles = StyleSheet.create({
  loginIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 43,
    alignItems: "center",
  },
});

export default LoginIcon;
