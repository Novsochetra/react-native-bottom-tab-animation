import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Pallete } from "../constant";

export interface IBottomTabProps {
  children?: React.ReactNode;
}

export const BottomTab: React.FC<IBottomTabProps> = (props) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(250).damping(20).stiffness(200)}
      style={styles.container}
    >
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 16,
    bottom: 16,
    height: 60,
    width: Dimensions.get("window").width - 32,
    backgroundColor: Pallete.WHITE,
    borderRadius: 20,
    flexDirection: "row",
  },
});
