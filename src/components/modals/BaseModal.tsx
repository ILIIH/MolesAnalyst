import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { WINDOW, countPixelRatio, smartScaleX } from "../../utility/SmartScale";
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";
import AppStyles from "../../themes/AppStyles";
import Fonts from "../../themes/Fonts";

type Props = {
  visible: boolean;
  onClosePressed: () => void;
  title: string;
  containerStyle?: any;
  contentStyle?: any;
  children?: any;
};

export default React.memo<Props>(function ChangeLogModal(props: Props) {
  const {
    visible,
    children,
    title,
    containerStyle,
    onClosePressed,
    contentStyle,
  } = props;
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={visible}
      onRequestClose={onClosePressed}
    >
      <View style={{ ...styles.main, ...containerStyle }}>
        <View style={styles.content}>
          <View style={styles.titleView}>
            <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
              {title}
            </Text>
            <TouchableOpacity onPress={onClosePressed}>
              <Image source={Images.iconClose} style={styles.iconClose} />
            </TouchableOpacity>
          </View>
          <View style={[styles.contentView, contentStyle]}>{children}</View>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.opacity,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxHeight: WINDOW.height - countPixelRatio(60),
    width: smartScaleX(259),
    backgroundColor: Colors.white,
    borderRadius: countPixelRatio(15),
    overflow: "hidden",
    ...AppStyles.mainStyles.shadow,
  },
  titleView: {
    height: countPixelRatio(45),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: smartScaleX(15),
    backgroundColor: Colors.primary,
  },
  title: {
    ...Fonts.style.large,
    flex: 1,
    color: Colors.white,
    marginRight: smartScaleX(4),
  },
  iconClose: {
    width: countPixelRatio(23.8),
    height: countPixelRatio(23.8),
    resizeMode: "contain",
  },
  contentView: {
    paddingHorizontal: smartScaleX(15),
    paddingVertical: smartScaleX(13),
    overflow: "hidden",
  },
});
