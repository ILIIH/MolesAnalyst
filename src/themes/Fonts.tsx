import { countPixelRatio } from "../utility";

const type = {
  base: "CircularStd",
  bold: "CircularStd-Bold",
  boldItalic: "CircularStd-BoldItalic",
  italic: "CircularStd-Italic",
};
const size = {
  h1: countPixelRatio(33),
  h2: countPixelRatio(30),
  h3: countPixelRatio(24),
  h4: countPixelRatio(20),
  h5: countPixelRatio(17.2),
  h6: countPixelRatio(14),
  large: countPixelRatio(14.8),
  medium: countPixelRatio(13.2),
  small: countPixelRatio(12),
  tiny: countPixelRatio(10),
  xtiny: countPixelRatio(9),
  notification: countPixelRatio(15),
  note: countPixelRatio(15),
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.bold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.bold,
    fontSize: size.h6,
  },
  baseH1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  baseH2: {
    fontFamily: type.base,
    fontSize: size.h2,
  },
  baseH3: {
    fontFamily: type.base,
    fontSize: size.h3,
  },
  baseH4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  baseH5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  baseH6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  note: {
    fontFamily: type.base,
    fontSize: size.note,
  },
  large: {
    fontFamily: type.bold,
    fontSize: size.large,
  },
  medium: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  small: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.bold,
    fontSize: size.tiny,
  },
  xtiny: {
    fontFamily: type.bold,
    fontSize: size.xtiny,
  },
  baseLarge: {
    fontFamily: type.base,
    fontSize: size.large,
  },
  baseMedium: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  baseSmall: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  baseTiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
  baseXtiny: {
    fontFamily: type.base,
    fontSize: size.xtiny,
  },
  italicSmall: {
    fontFamily: type.italic,
    fontSize: size.small,
  },
  italicTiny: {
    fontFamily: type.italic,
    fontSize: size.tiny,
  },
};

export default {
  type,
  size,
  style,
};
