import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import MaskedView from "@react-native-masked-view/masked-view";
import { Pallete } from "../constant";

export interface IAnimatedMaskedImageProps {
  icon: ImageSourcePropType;
  isActive: boolean;
}

export const AnimatedMaskedImage: React.FC<IAnimatedMaskedImageProps> = (
  props
) => {
  const animatedMaskLayerOne = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      backgroundColor: Pallete.ICON_COLOR,
    };
  });

  const animatedMaskLayerTwo = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      position: "absolute",
      backgroundColor: "green",
      zIndex: 9,

      transform: [
        {
          scale: props.isActive
            ? withTiming(1, { duration: 1000 })
            : withTiming(0, { duration: 1000 }),
        },
      ],
    };
  });

  return (
    <MaskedView
      style={styles.icon}
      maskElement={
        <Image source={props.icon} style={styles.icon} resizeMode="contain" />
      }
    >
      <Animated.View style={animatedMaskLayerOne} />
      <Animated.View style={animatedMaskLayerTwo} />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  container: {},

  icon: {
    width: 20,
    height: 20,
  },
});
