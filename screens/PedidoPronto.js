import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame from "../components/Frame";
import Frame1 from "../components/Frame1";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const PedidoPronto = () => {
  return (
    <View style={styles.pedidoPronto}>
      <Frame seuPedidoEstPronto="Seu pedido está pronto!" style={styles.botao}/>
      <View style={styles.vocParent}>
        <Text style={[styles.voc, styles.vocClr]}>Você</Text>
        <Text style={[styles.text, styles.vocClr]}>333</Text>
      </View>
      <Frame1 />
    </View>
  );
};

const styles = StyleSheet.create({
  vocClr: {
    color: Color.black,
    fontSize: 20,
    fontWeight: 500
  },
  botao: {
    fontWeight: '900',
    color: 'black'
  },
  voc: {
    fontWeight: "bolder",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
  },
  text: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "right",
  },
  vocParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 27,
    overflow: "hidden",
  },
  pedidoPronto: {
    backgroundColor: '#fff',
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_7xl,
    paddingTop: Padding.p_9xl,
    paddingRight: Padding.p_6xl,
    paddingBottom: 284,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
});

export default PedidoPronto;
