import React, { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import "../global.css";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontLoaded, error] = useFonts({
    "oleoeBold": require('.././assets/fonts/Amiri,Oleo_Script_Swash_Caps,Open_Sans/Oleo_Script_Swash_Caps/OleoScriptSwashCaps-Bold.ttf'),
    "oleoRegular": require('.././assets/fonts/Amiri,Oleo_Script_Swash_Caps,Open_Sans/Oleo_Script_Swash_Caps/OleoScriptSwashCaps-Regular.ttf')
  });
  

  useEffect(()=>{
    if(error) throw error;

    if(fontLoaded) SplashScreen.hideAsync();
 
  }, [fontLoaded, error])

  if(!fontLoaded && !error) return null;
  return (
    <>
    
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)/home" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
