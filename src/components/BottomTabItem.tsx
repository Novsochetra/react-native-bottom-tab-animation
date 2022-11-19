import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pallete, Tabs } from "../constant";
import { AnimatedMaskedImage } from "./AnimatedMaskedImage";

export interface IBottomTabItemProps {
  tab: typeof Tabs[keyof typeof Tabs];
  isActive: boolean;
  onPress: (tab: typeof Tabs[keyof typeof Tabs]) => void;
}

export const BottomTabItem: React.FC<IBottomTabItemProps> = (props) => {
  const height = useSharedValue(0);

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      height: props.isActive ? withTiming(20) : withTiming(0),
      width: "100%",
    };
  });

  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      position: "absolute",
      borderRadius: 10,
      left: 8,
      top: -4,
      backgroundColor: Pallete.YELLOW_30,
    };
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.tab)}
    >
      <View>
        {props.isActive ? (
          <Animated.View
            entering={FadeInUp}
            exiting={FadeOut}
            style={animatedCircleStyle}
          />
        ) : null}
        <AnimatedMaskedImage icon={props.tab.icon} isActive={props.isActive} />
      </View>
      <Animated.View style={animatedLabelStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
