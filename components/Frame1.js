import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.pedidosJEntreguesWrapper, styles.parentFlexBox]}>
          <Text style={styles.pedidosJEntregues}>Pedidos já entregues</Text>
        </View>
        <View style={[styles.santosParent, styles.parentFlexBox]}>
          <Text style={[styles.santos, styles.textTypo]}>santos</Text>
          <Text style={[styles.text, styles.textTypo]}>329</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.jairParent, styles.parentFlexBox]}>
          <Text style={[styles.santos, styles.textTypo]}>jair</Text>
          <Text style={[styles.text, styles.textTypo]}>328</Text>
        </View>
        <View style={[styles.jairParent, styles.parentFlexBox]}>
          <Text style={[styles.santos, styles.textTypo]}>j3r3mias</Text>
          <Text style={[styles.text, styles.textTypo]}>327</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mid,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
  },
  pedidosJEntregues: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
  },
  pedidosJEntreguesWrapper: {
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
  },
  santos: {
    textAlign: "center",
  },
  text: {
    textAlign: "right",
  },
  santosParent: {
    marginTop: 21,
    alignItems: "center",
  },
  frame1: {
    alignItems: "center",
  },
  jairParent: {
    alignItems: "center",
  },
  frame: {
    marginTop: 27,
    alignItems: "center",
  },
});

export default Frame1;
