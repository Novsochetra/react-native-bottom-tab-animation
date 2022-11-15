import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import MaskedView from "@react-native-masked-view/masked-view";

export interface IAnimatedMaskImageProps {
  icon: ImageSourcePropType;
  isActive: boolean;
}

export const AnimatedMaskImage: React.FC<IAnimatedMaskImageProps> = (props) => {
  const animatedLayerOneMask = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      backgroundColor: "rgba(210, 206, 213, 1)",
      transform: [{ scale: 1 }],
    };
  });

  const animatedLayerTwoMask = useAnimatedStyle(() => {
    return {
      width: 20,
      height: 20,
      backgroundColor: "#FFD311",
      position: "absolute",
      transform: [
        {
          scale: props.isActive
            ? withTiming(1, { duration: 500 })
            : withTiming(0, { duration: 500 }),
        },
      ],
    };
  });

  return (
    <MaskedView
      style={styles.icon}
      maskElement={
        <Image
          source={props.icon}
          style={[styles.icon, { tintColor: "rgba(210, 206, 213, 1)" }]}
          resizeMode="contain"
        />
      }
    >
      <Animated.View style={[animatedLayerOneMask]} />
      <Animated.View style={[animatedLayerTwoMask]} />
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
