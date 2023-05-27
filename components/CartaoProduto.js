import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CartaoProduto = ({ crepeDeFrangoMarginTop }) => {
  const card1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", crepeDeFrangoMarginTop),
    };
  }, [crepeDeFrangoMarginTop]);

  return (
    <View style={[styles.card1, card1Style]}>
      <View style={styles.cardProduto}>
        <Image
          style={styles.cardProdutoChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View>
          <Text style={[styles.crepeDeFrango, styles.xTypo]}>
            Crepe de frango
          </Text>
          <Text style={[styles.adicionalDeTomate, styles.xTypo]}>
            adicional de tomate
          </Text>
          <Text style={[styles.x, styles.xTypo]}>1x</Text>
        </View>
        <Image
          style={styles.fontistotrashIcon}
          contentFit="cover"
          source={require("../assets/fontistotrash.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  xTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  cardProdutoChild: {
    width: 64,
    height: 64,
  },
  crepeDeFrango: {
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  adicionalDeTomate: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.gray,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  x: {
    fontWeight: "200",
    fontFamily: FontFamily.montserratExtralight,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  fontistotrashIcon: {
    width: 22,
    height: 24,
    overflow: "hidden",
  },
  cardProduto: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.whitesmoke,
    flexDirection: "row",
    paddingLeft: Padding.p_2xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  card1: {
    alignSelf: "stretch",
  },
});

export default CartaoProduto;
