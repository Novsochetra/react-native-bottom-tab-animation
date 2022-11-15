import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BottomTab } from "./src/components/BottomTab";
import { BottomTabItem } from "./src/components/BottomTabItem";
import { Tabs } from "./src/constant";
import { SliderBottomTabName } from "./src/components/SliderBottomTabName";

/* TODO: refactor this file */

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [currentTab, setCurrentTab] = React.useState<
    typeof Tabs[keyof typeof Tabs]
  >(Tabs.HOME);
  const [currentIdx, setCurrentIdx] = React.useState(0);

  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("./src/assets/fonts/Nunito-Black.ttf"),
    "Nunito-BlackItalic": require("./src/assets/fonts/Nunito-BlackItalic.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("./src/assets/fonts/Nunito-BoldItalic.ttf"),
    "Nunito-ExtraBold": require("./src/assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBoldItalic": require("./src/assets/fonts/Nunito-ExtraBoldItalic.ttf"),
    "Nunito-ExtraLight": require("./src/assets/fonts/Nunito-ExtraLight.ttf"),
    "Nunito-ExtraLightItalic": require("./src/assets/fonts/Nunito-ExtraLightItalic.ttf"),
    "Nunito-Italic": require("./src/assets/fonts/Nunito-Italic.ttf"),
    "Nunito-Light": require("./src/assets/fonts/Nunito-Light.ttf"),
    "Nunito-LightItalic": require("./src/assets/fonts/Nunito-LightItalic.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("./src/assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./src/assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("./src/assets/fonts/Nunito-SemiBoldItalic.ttf"),
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const onPress = React.useCallback(
    (tab: typeof Tabs[keyof typeof Tabs]) => {
      /* TODO */
      setCurrentTab(tab);
      setCurrentIdx(tab.order - 1);
    },
    [currentTab]
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container]} onLayout={onLayoutRootView}>
      <BottomTab>
        <BottomTabItem
          tab={Tabs.HOME}
          isActive={currentTab.id === Tabs.HOME.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.FAVORITES}
          isActive={currentTab.id === Tabs.FAVORITES.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.CARTS}
          isActive={currentTab.id === Tabs.CARTS.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.PROFILE}
          isActive={currentTab.id === Tabs.PROFILE.id}
          onPress={onPress}
        />
        <SliderBottomTabName label={currentTab.label} index={currentIdx} />
      </BottomTab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE15D",
  },
});
