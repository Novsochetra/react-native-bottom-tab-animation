import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
  withSpring,
} from "react-native-reanimated";

export interface IBottomTabProps extends React.Component {
  children: React.ReactNode;
}

export const BottomTab: React.FC<IBottomTabProps> = (props) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(1000).springify().damping(20).stiffness(300)}
      exiting={FadeOutUp}
      style={styles.container}
    >
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: Dimensions.get("window").width - 32,
    height: 60,
    position: "absolute",
    bottom: 16,
    left: 16,
    flexDirection: "row",
  },
});
