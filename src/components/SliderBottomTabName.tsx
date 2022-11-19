import React from "react";
import { StyleSheet, Text, View, LayoutChangeEvent } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { BOTTOM_TAB_ITEM, Pallete } from "../constant";

export interface ISliderBottomTabNameProps {
  index: number;
  label: string;
}

export const SliderBottomTabName: React.FC<ISliderBottomTabNameProps> = (
  props
) => {
  const translateX = useSharedValue(0);
  const [textWidth, setTextWidth] = React.useState<number | null>(null);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      fontFamily: "Nunito-Bold",
      fontSize: 11,
      color: Pallete.SECONDARY,
      bottom: 8,
      transform: [{ translateX: translateX.value }],
    };
  });

  React.useEffect(() => {
    if (textWidth) {
      // we need to center the text
      translateX.value = withTiming(
        props.index * BOTTOM_TAB_ITEM.width +
          (BOTTOM_TAB_ITEM.width - textWidth) / 2,
        { duration: 250 }
      );
    }
  }, [textWidth]);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setTextWidth(nativeEvent.layout.width);
  };

  return (
    <Animated.Text style={animatedStyle} onLayout={onLayout}>
      {props.label}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  container: {},
});
