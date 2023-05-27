import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Carrinhop from "./Carrinhop";
import TiposDeProdutos from "./TiposDeProdutos";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const TelaDeTiposDeProduto = () => {

  const navigation = useNavigation();

  const carrinho = () => {
    navigation.navigate('Carrinhop');
  };

  const tiposDeProdutos = () => {
    navigation.navigate('TiposDeProdutos');
  };

  return (
    <ImageBackground
      style={styles.telaDeTiposDeProduto}
      resizeMode="cover"
      source={require("../assets/teladetiposdeproduto.png")}
    >
      <View style={styles.frameParent}>
        <View style={styles.logoParent}>
          <View style={styles.logo}>
            <Image
              style={styles.idIdp1Icon}
              contentFit="cover"
              source={require("../assets/ididp-12.png")}
            />
            <Text style={[styles.cantina, styles.cantinaFlexBox]}>cantina</Text>
          </View>
          <TouchableOpacity onPress={carrinho}>
            <Image
              style={styles.mingcutemenuFillIcon}
              contentFit="cover"
              source={require("../assets/mingcutemenufill.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.oQueVocVaiComerHojeParent}>
          <Text
            style={[styles.oQueVoc, styles.sucosTypo]}
          >{`O que você vai comer hoje? 
😋`}</Text>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <TouchableOpacity style={styles.psmilkshakeParent} onPress={tiposDeProdutos}>
                <Image
                  style={styles.psmilkshakeIcon}
                  contentFit="cover"
                  source={require("../assets/psmilkshake.png")}
                />
                <View style={styles.sucosParent}>
                  <Text style={[styles.sucos, styles.sucosTypo]}>Sucos</Text>
                  <Text
                    style={[styles.naturaisEFeitos, styles.cantinaFlexBox1]}
                  >{`Naturais e feitos
na hora`}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.parentSpaceBlock} onPress={tiposDeProdutos}>
                <Image
                  style={styles.uilfoodIcon}
                  contentFit="cover"
                  source={require("../assets/uilfood.png")}
                />
                <View style={styles.tapiocasParent}>
                  <Text style={[styles.sucos, styles.sucosTypo]}>Tapiocas</Text>
                  <Text
                    style={[styles.naturaisEFeitos, styles.cantinaFlexBox1]}
                  >{`O melhor do
nordeste`}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
              <TouchableOpacity style={styles.phbowlFoodParent} onPress={tiposDeProdutos}>
                <Image
                  style={styles.phbowlFoodIcon}
                  contentFit="cover"
                  source={require("../assets/phbowlfood.png")}
                />
                <View style={styles.cuzcuzParent}>
                  <Text style={[styles.sucos, styles.sucosTypo]}>Cuzcuz</Text>
                  <Text
                    style={[styles.naturaisEFeitos, styles.cantinaFlexBox1]}
                  >{`para quem gosta
de milho`}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.fluentfoodPizza24RegularParent,
                  styles.parentSpaceBlock,
                ]} onPress={tiposDeProdutos}
              >
                <Image
                  style={styles.fluentfoodPizza24RegularIcon}
                  contentFit="cover"
                  source={require("../assets/fluentfoodpizza24regular.png")}
                />
                <View style={styles.crepesParent}>
                  <Text style={[styles.sucos, styles.sucosTypo]}>Crepes</Text>
                  <Text
                    style={[styles.naturaisEFeitos, styles.cantinaFlexBox1]}
                  >{`Da França para
seu coração`}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.frameViewSpaceBlock} onPress={tiposDeProdutos}>
              <Image
                style={styles.fluentfoodEgg16RegularIcon}
                contentFit="cover"
                source={require("../assets/fluentfoodegg16regular.png")}
              />
              <View style={styles.omeletesParent}>
                <Text style={[styles.sucos, styles.sucosTypo]}>Omeletes</Text>
                <Text
                  style={[styles.naturaisEFeitos, styles.cantinaFlexBox1]}
                >{`O ovo veio primeiro
que a galinha`}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cantinaFlexBox: {
    display: "flex",
    justifyContent: "center",
  },
  sucosTypo: {
    fontFamily: FontFamily.helveticaBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
  },
  cantinaFlexBox1: {
    textAlign: "center",
    color: Color.white,
  },
  frameViewSpaceBlock: {
    marginTop: 20,
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginLeft: 81,
    alignItems: "center",
  },
  idIdp1Icon: {
    height: 42,
    width: 52,
  },
  cantina: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inikaRegular,
    width: 84,
    height: 29,
    marginLeft: -11,
    textAlign: "center",
    color: Color.white,
    alignItems: "center",
  },
  logo: {
    width: 127,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mingcutemenuFillIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  logoParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  oQueVoc: {
    fontSize: FontSize.size_5xl,
    width: 139,
    height: 116,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  psmilkshakeIcon: {
    height: 61,
    width: 42,
    overflow: "hidden",
  },
  sucos: {
    fontSize: FontSize.size_xl,
  },
  naturaisEFeitos: {
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    fontFamily: FontFamily.helveticaLight,
    marginTop: 3,
  },
  sucosParent: {
    marginTop: 15,
    alignItems: "center",
  },
  psmilkshakeParent: {
    alignItems: "center",
  },
  uilfoodIcon: {
    width: 58,
    height: 65,
    overflow: "hidden",
  },
  tapiocasParent: {
    width: 86,
    marginTop: 12,
    alignItems: "center",
  },
  frameContainer: {
    flexDirection: "row",
  },
  phbowlFoodIcon: {
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  cuzcuzParent: {
    width: 116,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  phbowlFoodParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  fluentfoodPizza24RegularIcon: {
    width: 75,
    height: 81,
    overflow: "hidden",
  },
  crepesParent: {
    width: 106,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  fluentfoodPizza24RegularParent: {
    justifyContent: "center",
  },
  frameView: {
    justifyContent: "center",
    flexDirection: "row",
  },
  fluentfoodEgg16RegularIcon: {
    width: 85,
    height: 85,
    overflow: "hidden",
  },
  omeletesParent: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 27,
    alignItems: "center",
    alignSelf: "stretch",
  },
  oQueVocVaiComerHojeParent: {
    marginTop: 74,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 25,
  },
  telaDeTiposDeProduto: {
    flex: 1,
    width: "100%",
    paddingVertical: 47,
    overflow: "hidden",
  },
});

export default TelaDeTiposDeProduto;
