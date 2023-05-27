import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import TelaDeTiposDeProduto from "./TelaDeTiposDeProduto";
import Pagamento from "./Pagamento";
import Carrinhop from "./Carrinhop";

const TiposDeProdutos = () => {

  const navigation = useNavigation();

  const voltaMenu = () => {
    navigation.navigate('TelaDeTiposDeProduto');
  };

  const checkout = () => {
    navigation.navigate('Pagamento');
  };

  const carrinho = () => {
    navigation.navigate('Carrinhop');
  };

  return (
    <View style={styles.tiposDeProdutos}>
      <Image
        style={[styles.telaDeTiposDeProduto, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/teladetiposdeproduto.png")}
      />
      <View style={[styles.frameParent, styles.topoPosition]}>
        <FrameComponent />
        <FrameComponent sucoDeMaMarginTop={10} />
        <FrameComponent sucoDeMaMarginTop={10} />
        <FrameComponent sucoDeMaMarginTop={10} />
      </View>
      <View style={[styles.topo, styles.topoFlexBox]}>
        <TouchableOpacity style={[styles.seta, styles.setaFlexBox]} onPress={voltaMenu}>
          <Image
            style={styles.containerSetaIcon}
            contentFit="cover"
            source={require("../assets/container-seta.png")}
          />
        </TouchableOpacity>
        <View style={[styles.cartContainer, styles.setaFlexBox]}>
        <TouchableOpacity onPress={carrinho}>
          <Image
            style={styles.solarcartOutlineIcon}
            contentFit="cover"
            source={require("../assets/solarcartoutline.png")}
          />
        </TouchableOpacity>
          <Image
            style={styles.cartContainerChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
      </View>
      <TouchableOpacity style={[styles.pagarWrapper, styles.topoFlexBox]} onPress={checkout}>
        <Text style={styles.pagar}>ir para checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  topoPosition: {
    left: "50%",
    top: "50%",
  },
  topoFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  setaFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  telaDeTiposDeProduto: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  frameParent: {
    marginTop: -275.5,
    marginLeft: -147,
    borderRadius: 17,
    backgroundColor: "rgba(141, 178, 234, 0.7)",
    paddingHorizontal: 35,
    paddingVertical: 58,
    position: "absolute",
    overflow: "hidden",
  },
  containerSetaIcon: {
    borderRadius: Border.br_9xs,
    width: 49,
    height: 49,
    overflow: "hidden",
  },
  seta: {
    borderRadius: Border.br_7xs,
    width: 35,
    justifyContent: "center",
    height: 35,
  },
  solarcartOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cartContainerChild: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  cartContainer: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lightgray,
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_9xs,
  },
  topo: {
    marginTop: -349,
    marginLeft: -141,
    alignItems: 'center',
    width: 287,
    height: 35,
    left: "50%",
    top: "50%",
  },
  pagar: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserratRegular,
    color: Color.white,
    textAlign: "center",
    marginLeft: 60
  },
  pagarWrapper: {
    top: 691,
    left: 25,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightgreen,
    width: 324,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_lg,
  },
  tiposDeProdutos: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default TiposDeProdutos;
