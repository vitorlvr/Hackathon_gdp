import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable, Image  } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PagLogin = () => {
  return (
    <View style={styles.logoParent}>
      <View style={styles.logo}>
        <View style={[styles.cantinaParent, styles.entrarFlexBox1]}>
          <Text style={[styles.cantina, styles.cantinaFlexBox]}>cantina</Text>
          <Image
            style={[styles.idIdp1Icon, styles.entrarFlexBox]}
            contentFit="cover"
            source={require("../assets/ididp-11.png")}
          />
        </View>
      </View>
      <TextInput
        style={[styles.nomeUsuario, styles.senhaTypo]}
        placeholder="Usuário"
        keyboardType="default"
        autoCapitalize="none"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.senha, styles.senhaTypo]}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#000"
      />
      <View style={[styles.entrar, styles.entrarFlexBox]}>
        <Text style={[styles.entrar1, styles.senhaTypo]}>entrar</Text>
      </View>
      <Text style={[styles.aindaNo, styles.senhaTypo]}>
        ainda não é usuário?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entrarFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  cantinaFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  entrarFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  senhaTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
  },
  cantina: {
    fontFamily: FontFamily.inikaRegular,
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    color: Color.white,
    alignSelf: "stretch",
  },
  idIdp1Icon: {
    maxWidth: "100%",
    height: 100,
    width: "100%",
    marginTop: -7,
  },
  cantinaParent: {
    width: 120,
  },
  logo: {
    paddingHorizontal: 100,
    paddingVertical: 100,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nomeUsuario: {
    width: 250,
    marginTop: 16,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
    fontFamily: FontFamily.montserratRegular,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  senha: {
    width: 250,
    marginTop: 16,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
    fontFamily: FontFamily.montserratRegular,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  entrar1: {
    textAlign: "center",
    color: Color.white,
    width: 200,
  },
  entrar: {
    backgroundColor: Color.blueviolet,
    width: 250,
    marginTop: 16,
    marginLeft: 36,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  aindaNo: {
    marginTop: 16,
    textAlign: "center",
    color: Color.white,
    alignSelf: "stretch",
  },
  logoParent: {
    alignItems: "center",
  },
});

export default PagLogin;