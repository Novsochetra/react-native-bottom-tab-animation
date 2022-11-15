import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BOTTOM_TAB_ITEM } from "../constant";
import { BottomTabItem } from "./BottomTabItem";

export interface ISliderBottomTabNameProps {
  label: string;
  index: number;
}

export const SliderBottomTabName: React.FC<ISliderBottomTabNameProps> = ({
  label,
  index,
}) => {
  const translateX = useSharedValue(0);
  const [width, setWidth] = useState<number | null>(null);

  const style = useAnimatedStyle(() => {
    return {
      fontSize: 11,
      fontFamily: "Nunito-Bold",
      position: "absolute",
      fontWeight: "700",
      bottom: 12,
      color: "gray",
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    if (width) {
      translateX.value = withTiming(
        index * BOTTOM_TAB_ITEM.width + (BOTTOM_TAB_ITEM.width - width) / 2
      );
    }
  }, [width]);

  return (
    <Animated.Text
      style={style}
      onLayout={({ nativeEvent }) => {
        setWidth(nativeEvent.layout.width);
      }}
    >
      {label}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  container: {},
});
