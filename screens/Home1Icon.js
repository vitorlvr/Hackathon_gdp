import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Home1Icon = () => {
  return (
    <ImageBackground
      style={[styles.home1Icon, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/home1.png")}
    >
      <Text style={[styles.bemVindo, styles.cantinaFlexBox]}>Bem-vindo à</Text>
      <View style={styles.logo}>
        <Text style={[styles.cantina, styles.cantinaFlexBox]}>cantina</Text>
        <Image
          style={[styles.idIdp1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ididp-1.png")}
        />
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  cantinaFlexBox: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.inikaRegular,
    alignSelf: "stretch",
    padding: 0
  },
  bemVindo: {
    fontSize: 48,
    marginTop: -20,
    marginBottom: 10,
  },
  cantina: {
    fontSize: 28,
    marginTop: -10,
    marginBottom: 40,
  },
  idIdp1Icon: {
    maxWidth: "100%",
    height: 100,
    marginTop: -11,
    alignSelf: "stretch",
  },
  logo: {
    justifyContent: "center",
    marginTop: 2,
    alignSelf: "stretch",
    alignItems: "center",
  },
  home1Icon: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 300,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Home1Icon;