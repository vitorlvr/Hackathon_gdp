import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import AllProducts from "../components/AllProducts";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import TelaDeTiposDeProduto from "./TelaDeTiposDeProduto";
import Pagamento from "./Pagamento";

const Carrinhop = () => {
  
  const navigation = useNavigation();

  const telaProdutos = () => {
    navigation.navigate('TelaDeTiposDeProduto');
  };
  
  const pagamento = () => {
    navigation.navigate('Pagamento');
  };

  return (
    <Pressable style={styles.carrinhop}>
      <TouchableOpacity style={[styles.irParaPagamento, styles.cartContainerFlexBox]} onPress={pagamento}>
        <Text style={styles.irParaPagamento1}>Ir para pagamento</Text>
      </TouchableOpacity>
      <AllProducts />
      <View style={[styles.topo, styles.topoFlexBox]}>
        <TouchableOpacity style={[styles.seta, styles.topoFlexBox]} onPress={telaProdutos}>
          <Image
            style={styles.containerSetaIcon}
            contentFit="cover"
            source={require("../assets/container-seta.png")}
          />
        </TouchableOpacity>
        <View style={[styles.cartContainer, styles.cartContainerFlexBox]}>
        <TouchableOpacity>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartContainerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  topoFlexBox: {
    height: 35,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  irParaPagamento1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  irParaPagamento: {
    marginLeft: -160.5,
    top: 662,
    borderRadius: 20,
    backgroundColor: "#64cc32",
    width: 321,
    paddingHorizontal: 42,
    paddingVertical: 29,
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  containerSetaIcon: {
    borderRadius: 4,
    width: 49,
    height: 49,
    overflow: "hidden",
  },
  seta: {
    borderRadius: 6,
    width: 35,
    justifyContent: "center",
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
    borderRadius: 8,
    backgroundColor: "#d1d1d1",
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
  topo: {
    marginTop: -360,
    marginLeft: -145,
    top: "50%",
    width: 277,
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
  },
  carrinhop: {
    backgroundColor: Color.white,
    width: "100%",
    height: 812,
    marginBottom: 0,
    overflow: "hidden",
    flex: 1,
  },
});

export default Carrinhop;
