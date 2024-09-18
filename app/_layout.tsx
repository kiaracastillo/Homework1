import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts ({
    "suse-bold":require('./../assets/fonts/SUSE-Bold.ttf'),
    "suse-med":require('./../assets/fonts/SUSE-Medium.ttf'),
    "suse-reg":require('./../assets/fonts//SUSE-Regular.ttf'),
  })

  return (
    <Stack screenOptions={{
      headerShown: false 
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
