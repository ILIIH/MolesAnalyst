//@flow

import { Dimensions } from "react-native";

export const DESIGN_WIDTH = 281;
export const DESIGN_HEIGHT = 609;

export const WINDOW = Dimensions.get("window");

export const smartScaleX = (value: number) => {
  const width = WINDOW.width;
  return (value * width) / DESIGN_WIDTH;
};

export const smartScaleY = (value: number) => {
  const height = WINDOW.height;
  return (value * height) / DESIGN_HEIGHT;
};

export const countPixelRatio = (value: number) => {
  const width = WINDOW.width;
  const height = WINDOW.height;
  if (height / width >= 2) {
    return (value * width) / DESIGN_WIDTH;
  } else {
    return (value * height) / DESIGN_HEIGHT;
  }
};

export const screenPaddingValue = countPixelRatio(12.5);
