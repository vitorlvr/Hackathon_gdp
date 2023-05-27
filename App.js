const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home1Icon from "./screens/Home1Icon";
import TiposDeProdutos from "./screens/TiposDeProdutos";
import PedidoPronto from "./screens/PedidoPronto";
import FilaDePedidos from "./screens/FilaDePedidos";
import Pagamento from "./screens/Pagamento";
import Carrinhop from "./screens/Carrinhop";
import LoginIcon from "./screens/LoginIcon";
import TelaDeTiposDeProduto from "./screens/TelaDeTiposDeProduto";
import CadastroIcon from "./screens/CadastroIcon";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inika_regular: require("./assets/fonts/Inika_regular.ttf"),
    Montserrat_extralight: require("./assets/fonts/Montserrat_extralight.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    Helvetica_light: require("./assets/fonts/Helvetica_light.ttf"),
    Helvetica_bold: require("./assets/fonts/Helvetica_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home1"
              component={Home1Icon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TiposDeProdutos"
              component={TiposDeProdutos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PedidoPronto"
              component={PedidoPronto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FilaDePedidos"
              component={FilaDePedidos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pagamento"
              component={Pagamento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carrinhop"
              component={Carrinhop}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaDeTiposDeProduto"
              component={TelaDeTiposDeProduto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={CadastroIcon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;