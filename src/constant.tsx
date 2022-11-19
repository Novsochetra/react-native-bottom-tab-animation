import { Dimensions } from "react-native";

export const Tabs = {
  HOME: {
    id: "HOME",
    label: "Home",
    order: 1,
    icon: require("./assets/house.png"),
    activeIcon: require("./assets/house.fill.png"),
  },
  FAVORITES: {
    id: "FAVORITES",
    label: "Favorites",
    order: 2,
    icon: require("./assets/heart.png"),
    activeIcon: require("./assets/heart.fill.png"),
  },
  CARTS: {
    id: "CARTS",
    label: "Carts",
    order: 3,
    icon: require("./assets/cart.png"),
    activeIcon: require("./assets/cart.fill.png"),
  },
  PROFILE: {
    id: "PROFILE",
    label: "Profile",
    order: 4,
    icon: require("./assets/person.png"),
    activeIcon: require("./assets/person.fill.png"),
  },
};

export const BOTTOM_TAB_ITEM = {
  width: (Dimensions.get("window").width - 32) / 4,
  height: 60,
};

export const Pallete = {
  YELLOW_100: "rgba(255, 225, 93, 1)",
  YELLOW_30: "rgba(255, 225, 93, 0.3)",
  SECONDARY: "gray",
  ICON_COLOR: "rgba(210, 206, 213, 1)",
  WHITE: "white",
};
