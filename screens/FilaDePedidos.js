import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Frame from "../components/Frame";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const FilaDePedidos = () => {
  return (
    <View style={styles.filaDePedidos}>
      <Frame
        seuPedidoEstPronto="Aguente firme! Seu pedido está vindo"
        seuPedidoEstProntoBackgroundColor="#e3e3e3"
        frame29Color="#000"
        filaDePedidosMarginTop={-3}
      />
      <View style={styles.frame}>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>Pedro</Text>
          <Text style={styles.text}>330</Text>
        </View>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>Amaro</Text>
          <Text style={styles.text}>331</Text>
        </View>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>Cláudia</Text>
          <Text style={styles.text}>332</Text>
        </View>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.voc, styles.vocFlexBox]}>Você</Text>
          <Text style={styles.text}>333</Text>
        </View>
      </View>
      <View
        style={[styles.pedidosJEntreguesWrapper, styles.pedroParentFlexBox]}
      >
        <Text style={[styles.pedidosJEntregues, styles.vocFlexBox]}>
          Pedidos já entregues
        </Text>
      </View>
      <View style={styles.frame}>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>santos</Text>
          <Text style={styles.text}>329</Text>
        </View>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>jair</Text>
          <Text style={styles.text}>328</Text>
        </View>
        <View style={[styles.pedroParent, styles.pedroParentFlexBox]}>
          <Text style={[styles.pedro, styles.vocFlexBox]}>j3r3mias</Text>
          <Text style={styles.text}>327</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pedroParentFlexBox: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mid,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  vocFlexBox: {
    textAlign: "center",
    color: Color.black,
  },
  pedro: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  text: {
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
  },
  pedroParent: {
    alignItems: "center",
  },
  voc: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.size_base,
  },
  frame: {
    marginTop: 21,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  pedidosJEntregues: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    left: 50
  },
  pedidosJEntreguesWrapper: {
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
    marginTop: 21,
  },
  filaDePedidos: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_7xl,
    paddingTop: Padding.p_9xl,
    paddingRight: Padding.p_6xl,
    paddingBottom: 128,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
});

export default FilaDePedidos;
