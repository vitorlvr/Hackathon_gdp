import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import TelaDeTiposDeProduto from "./TelaDeTiposDeProduto";


const Pagamento = () => {

  const navigation = useNavigation();

  const voltaMenu = () => {
    navigation.navigate('TiposDeProdutos');
  };
  
  return (
    <View style={styles.pagamento}>
      <View style={styles.topo}>
        <TouchableOpacity style={styles.seta} onPress={voltaMenu}>
          <Image
            style={styles.containerSetaIcon}
            contentFit="cover"
            source={require("../assets/container-seta.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.total, styles.totalTypo]}>total</Text>
      <Text style={[styles.rXxxx, styles.totalTypo]}>R$: xx.xx</Text>
      <View style={styles.seuNmeroSerParent}>
        <Text style={[styles.seuNmeroSer, styles.totalTypo]}>
          Seu número será: 
        </Text>
        <Text style={[styles.seuNmeroSer, styles.totalTypo]}> 333</Text>
      </View>
      <View style={[styles.seuPedidoWrapper, styles.wrapperParentPosition]}>
        <Text
          style={[styles.seuNmeroSer, styles.totalTypo]}
        >{`Seu pedido: `}</Text>
      </View>
      <View
        style={[styles.mtodoDePagamentoParent, styles.wrapperParentPosition]}
      >
        <Text style={[styles.seuNmeroSer, styles.totalTypo]}>
          Método de pagamento
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <TouchableOpacity style={[styles.pagarWrapper, styles.wrapperParentPosition]}>
        <Text style={styles.pagar}>Pagar</Text>
      </TouchableOpacity>
      <View style={[styles.crepeDeFrangoParent, styles.wrapperParentPosition]}>
        <Text style={[styles.crepeDeFrango, styles.r1090Typo]}>
          Crepe de frango
        </Text>
        <Text style={[styles.r1090, styles.r1090Typo]}>R$: 10,90</Text>
      </View>
      <View style={[styles.crepeDeFrangoGroup, styles.wrapperParentPosition]}>
        <Text style={[styles.crepeDeFrango, styles.r1090Typo]}>
          Crepe de frango
        </Text>
        <Text style={[styles.r1090, styles.r1090Typo]}>R$: 10,90</Text>
      </View>
      <View
        style={[styles.crepeDeFrangoContainer, styles.wrapperParentPosition]}
      >
        <Text style={[styles.crepeDeFrango, styles.r1090Typo]}>
          Crepe de frango
        </Text>
        <Text style={[styles.r1090, styles.r1090Typo]}>R$: 10,90</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalTypo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: 20,
    fontWeight: "800"
  },
  wrapperParentPosition: {
    width: 324,
    left: 28,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mid,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  r1090Typo: {
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.montserratRegular,
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
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  topo: {
    marginTop: -359,
    marginLeft: -160,
    top: "50%",
    left: "50%",
    width: 277,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  total: {
    left: 80,
    textAlign: "center",
    top: 121,
    color: Color.black,
    fontWeight: 'bold',
    position: "absolute",
  },
  rXxxx: {
    left: 236,
    textAlign: "center",
    top: 121,
    color: Color.black,
    position: "absolute",
  },
  seuNmeroSer: {
    textAlign: "center",
  },
  seuNmeroSerParent: {
    top: 205,
    left: 75,
    borderRadius: 23,
    backgroundColor: "#ddd",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  seuPedidoWrapper: {
    top: 325,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: 324,
    left: 20,
  },
  vectorIcon: {
    width: 21,
    height: 18,
    marginLeft: 10
  },
  mtodoDePagamentoParent: {
    top: 588,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: 324,
    left: 20,
    alignItems: "center",
  },
  pagar: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xl,
  },
  pagarWrapper: {
    top: 697,
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightgreen,
    left: 20,
    width: 324,
    alignItems: "center",
  },
  crepeDeFrango: {
    textAlign: "center",
  },
  r1090: {
    textAlign: "right",
  },
  crepeDeFrangoParent: {
    top: 406,
    left: 20,
    width: 324,
    alignItems: "center",
  },
  crepeDeFrangoGroup: {
    top: 462,
    left: 20,
    width: 324,
    alignItems: "center",
  },
  crepeDeFrangoContainer: {
    top: 518,
    left: 20,
    width: 324,
    alignItems: "center",
  },
  pagamento: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden"
  },
});

export default Pagamento;
