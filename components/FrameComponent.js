import React, { useMemo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({ sucoDeMaMarginTop }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", sucoDeMaMarginTop),
    };
  }, [sucoDeMaMarginTop]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-45.png")}
      />
      <View style={styles.sucoDeMaParent}>
        <Text style={[styles.sucoDeMa, styles.sucoFlexBox]}>Suco de maçã</Text>
        <Text style={[styles.deliciosoSucoDe, styles.sucoFlexBox]}>
          delicioso suco de maçã para pessoas
        </Text>
        <Text style={[styles.deliciosoSucoDe, styles.sucoFlexBox]}>
          R$: 9,50
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sucoFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  frameChild: {
    borderRadius: Border.br_28xl,
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  sucoDeMa: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
  },
  deliciosoSucoDe: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    display: "flex",
    width: 152,
    height: 33,
    alignItems: "center",
  },
  sucoDeMaParent: {
    justifyContent: "center",
  },
  frameParent: {
    width: 224,
    height: 86,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FrameComponent;
