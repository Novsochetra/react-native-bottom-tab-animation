import React from "react";
import {} from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { MainLayout } from "./src/components/MainLayout";
import { Tabs } from "./src/constant";
import { BottomTab } from "./src/components/BottomTab";
import { BottomTabItem } from "./src/components/BottomTabItem";
import { SliderBottomTabName } from "./src/components/SliderBottomTabName";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [activeTab, setActiveTab] = React.useState(Tabs.HOME);

  const onPress = (tab: typeof Tabs[keyof typeof Tabs]) => {
    setActiveTab(tab);
  };

  return (
    <MainLayout>
      <BottomTab>
        <BottomTabItem
          tab={Tabs.HOME}
          isActive={activeTab.id === Tabs.HOME.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.FAVORITES}
          isActive={activeTab.id === Tabs.FAVORITES.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.CARTS}
          isActive={activeTab.id === Tabs.CARTS.id}
          onPress={onPress}
        />
        <BottomTabItem
          tab={Tabs.PROFILE}
          isActive={activeTab.id === Tabs.PROFILE.id}
          onPress={onPress}
        />

        <SliderBottomTabName
          label={activeTab.label}
          index={activeTab.order - 1}
        />
      </BottomTab>
    </MainLayout>
  );
}
