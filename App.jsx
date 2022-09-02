import { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useFonts } from "expo-font";

import "react-native-gesture-handler";
import Started from "./src/screens/Started";
import Container from "./Container";

export default function App() {
  const [getStarted, setStarted] = useState(true);

  useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  return (
    <TailwindProvider>
      {getStarted ? <Container /> : <Started setStarted={setStarted} />}
    </TailwindProvider>
  );
}
