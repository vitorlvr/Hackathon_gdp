import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const CadastroIcon = () => {
  const [emailTextInput, setEmailTextInput] = useState("Email");

  return (
    <ImageBackground
      style={[styles.cadastroIcon, styles.nomeFlexBox]}
      resizeMode="cover"
      source={require("../assets/cadastro.png")}
    >
      <View style={[styles.logoParent, styles.logoFlexBox]}>
        <View style={[styles.logo, styles.logoFlexBox]}>
          <View style={styles.logoInner}>
            <View style={styles.cantinaParent}>
              <Text style={[styles.cantina, styles.cantinaClr]}>cantina</Text>
              <Image
                style={styles.idIdp1Icon}
                contentFit="cover"
                source={require("../assets/ididp-11.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.nomeParent}>
          <TextInput
            style={[styles.nome, styles.nomeTypo]}
            placeholder="Nome completo"
            keyboardType="default"
            autoCapitalize="words"
            placeholderTextColor="#000"
          />
          <TextInput
            style={[styles.email, styles.emailFlexBox]}
            placeholder="Email"
            keyboardType="default"
            autoCapitalize="none"
            value={emailTextInput}
            onChangeText={setEmailTextInput}
            placeholderTextColor="#000"
            autoComplete="email"
          />
          <TextInput
            style={[styles.email, styles.emailFlexBox]}
            placeholder="CPF"
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholderTextColor="#000"
          />
          <View style={[styles.celular, styles.emailFlexBox]}>
            <Text style={[styles.celularOpcional, styles.nomeTypo]}>
              Celular (opcional)
            </Text>
          </View>
          <TextInput
            style={[styles.email, styles.emailFlexBox]}
            placeholder="Senha"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry
            placeholderTextColor="#000"
          />
          <View style={[styles.celular, styles.emailFlexBox]}>
            <Text style={[styles.celularOpcional, styles.nomeTypo]}>
              Confirme sua senha
            </Text>
          </View>
          <Pressable style={[styles.finalizar, styles.emailFlexBox]}>
            <Text style={[styles.cadastrar, styles.nomeTypo]}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  nomeFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  logoFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cantinaClr: {
    color: Color.white,
    textAlign: "center",
  },
  nomeTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
  },
  emailFlexBox: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  cantina: {
    fontFamily: FontFamily.inikaRegular,
    display: "flex",
    height: 47,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.white,
    width: 126,
    justifyContent: "center",
    alignItems: "center",
  },
  idIdp1Icon: {
    width: 100,
    height: 100,
    marginTop: -19,
  },
  cantinaParent: {
    width: 126,
    justifyContent: "center",
    alignItems: "center",
  },
  logoInner: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  logo: {
    height: 138,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 105,
    justifyContent: "center",
  },
  nome: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    width: 263,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  email: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    width: 263,
    backgroundColor: Color.white,
  },
  celularOpcional: {
    color: Color.black,
    textAlign: "center",
    flex: 1,
  },
  celular: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_xs,
    width: 263,
    backgroundColor: Color.white,
  },
  cadastrar: {
    textAlign: "center",
    color: Color.white,
  },
  finalizar: {
    backgroundColor: Color.blueviolet,
    width: 117,
    padding: Padding.p_4xs,
    justifyContent: "center",
  },
  nomeParent: {
    paddingHorizontal: 0,
    paddingVertical: 36,
    marginTop: 8,
    alignItems: "center",
  },
  logoParent: {
    paddingHorizontal: 26,
    paddingVertical: 68,
  },
  cadastroIcon: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CadastroIcon;
