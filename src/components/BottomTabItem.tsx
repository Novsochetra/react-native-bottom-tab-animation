import React, { useEffect } from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Tabs } from "../constant";

export interface IBottomTabItemProps {
  tab: typeof Tabs[keyof typeof Tabs];
  isActive: boolean;
  onPress: (tab: typeof Tabs[keyof typeof Tabs]) => void;
}

export const BottomTabItem: React.FC<IBottomTabItemProps> = ({
  tab,
  isActive,
  onPress,
}) => {
  const height = useSharedValue(0);
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      left: 8,
      borderRadius: 10,
      backgroundColor: "rgba(255, 225, 93, 0.5)",
      position: "absolute",
    };
  });
  const style = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: height.value,
    };
  });

  useEffect(() => {
    height.value = withTiming(isActive ? 20 : 0);
  }, [isActive]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(tab)}>
      <View>
        {isActive ? (
          <Animated.View
            entering={FadeInUp}
            exiting={FadeOut}
            style={animatedCircleStyle}
          />
        ) : null}
        <Animated.Image
          entering={FadeIn.duration(250)}
          exiting={FadeOut.duration(250)}
          source={isActive ? tab.activeIcon : tab.icon}
          style={[
            styles.icon,
            isActive
              ? { tintColor: "rgba(76, 73, 76, 1)" }
              : { tintColor: "rgba(210, 206, 213, 1)" },
          ]}
          resizeMode="contain"
        />
      </View>
      <Animated.View style={style} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 20,
    height: 20,
    // tintColor: "lightgray",
  },
});
