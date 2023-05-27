import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CartaoProduto from "./CartaoProduto";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AllProducts = () => {
  return (
    <View style={styles.card1Parent}>
      <CartaoProduto />
      <View style={styles.card2}>
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
          <View style={styles.fontistotrash}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
      <CartaoProduto crepeDeFrangoMarginTop={17} />
      <CartaoProduto crepeDeFrangoMarginTop={17} />
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
  vectorIcon: {
    height: "99.98%",
    width: "99.96%",
    top: "0%",
    right: "0.04%",
    bottom: "0.02%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  fontistotrash: {
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
  card2: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  card1Parent: {
    top: 145,
    left: 35,
    width: 304,
    position: "absolute",
  },
});

export default AllProducts;
