import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({
  seuPedidoEstPronto,
  seuPedidoEstProntoBackgroundColor,
  frame29Color,
  filaDePedidosMarginTop,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", seuPedidoEstProntoBackgroundColor),
    };
  }, [seuPedidoEstProntoBackgroundColor]);

  const seuPedidoEstStyle = useMemo(() => {
    return {
      ...getStyleValue("color", frame29Color),
    };
  }, [frame29Color]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", filaDePedidosMarginTop),
    };
  }, [filaDePedidosMarginTop]);

  return (
    <View style={styles.frame}>
      <View
        style={[
          styles.seuPedidoEstProntoWrapper,
          styles.wrapperSpaceBlock,
          frameView1Style,
        ]}
      >
        <Text
          style={[
            styles.seuPedidoEst,
            styles.seuPedidoEstTypo,
            seuPedidoEstStyle,
          ]}
        >
          {seuPedidoEstPronto}
        </Text>
      </View>
      <View
        style={[
          styles.filaDePedidosWrapper,
          styles.wrapperSpaceBlock,
          frameView2Style,
        ]}
      >
        <Text style={[styles.filaDePedidos, styles.seuPedidoEstTypo]}>
          Fila de pedidos:
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mid,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  seuPedidoEstTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xl,
  },
  seuPedidoEst: {
    flex: 1,
    color: Color.white,
  },
  seuPedidoEstProntoWrapper: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightgreen,
    justifyContent: "center",
    alignItems: "center",
  },
  filaDePedidos: {
    color: Color.black,
    left: 72
  },
  filaDePedidosWrapper: {
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    marginTop: 21,
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default Frame;
