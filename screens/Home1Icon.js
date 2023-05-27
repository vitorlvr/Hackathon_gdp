import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
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
  },
  bemVindo: {
    fontSize: 48,
  },
  cantina: {
    fontSize: FontSize.size_base,
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
    paddingHorizontal: 48,
    paddingVertical: 258,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Home1Icon;