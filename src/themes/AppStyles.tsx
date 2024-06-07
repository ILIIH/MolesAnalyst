import { countPixelRatio } from "../utility";
import Colors from "./Colors";
import Fonts from "./Fonts";
import Metrics from "./Metrics";

const mainStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  transparentContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContent: {
    width: Metrics.screenWidth - 40,
  },
  error: {
    ...Fonts.style.baseSmall,
    color: Colors.red,
    marginTop: countPixelRatio(1),
    marginBottom: countPixelRatio(4),
  },
  submitButton: {
    marginTop: 50,
  },
  shadow: {
    shadowOpacity: 0.2,
    shadowRadius: countPixelRatio(3),
    shadowColor: "#1180f3",
    shadowOffset: { height: countPixelRatio(5), width: 0 },
    elevation: countPixelRatio(5),
  },
  shadow2: {
    shadowOpacity: 0.2,
    shadowRadius: countPixelRatio(2),
    shadowColor: "#1180f3",
    shadowOffset: { height: countPixelRatio(2), width: 0 },
    elevation: countPixelRatio(2),
  },
  photo: {
    width: Metrics.screenWidth - 40,
    height: (Metrics.screenWidth - 40) * 0.75,
  },
  photoButton: {
    width: "80%",
    minWidth: 200,
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 50,
  },
  footerActions: {
    flexDirection: "row",
  },
  actionButton: {
    flex: 1,
  },
};

const hitSlop = {
  top: countPixelRatio(8),
  left: countPixelRatio(8),
  right: countPixelRatio(8),
  bottom: countPixelRatio(8),
};

const tagsStyles = {
  h1: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h2,
    color: Colors.black,
  },
  h2: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h3,
    color: Colors.black,
  },
  h3: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h4,
    color: Colors.black,
  },
  h4: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    color: Colors.black,
  },
  p: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.grey,
  },
  blockquote: {
    fontFamily: Fonts.type.italic,
    fontSize: Fonts.size.small,
    marginHorizontal: countPixelRatio(10),
    color: Colors.grey,
  },
  a: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
  },
  pre: {
    fontSize: Fonts.size.small,
    color: Colors.grey,
  },
  em: {
    fontFamily: Fonts.type.italic,
  },
  strong: {
    fontFamily: Fonts.type.bold,
  },
  ol: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.grey,
  },
  ul: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.grey,
  },
};

const systemFonts = [Fonts.type.base, Fonts.type.bold, Fonts.type.italic];

export default {
  mainStyles,
  hitSlop,
  tagsStyles,
  systemFonts,
};
