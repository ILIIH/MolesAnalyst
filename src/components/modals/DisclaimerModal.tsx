import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BaseModal from "./BaseModal";

type Props = {
  visible: boolean;
  onClosePressed: () => void;
};

const AddNoteModal: React.FC<Props> = (props) => {
  const { visible, onClosePressed } = props;

  return (
    <BaseModal
      visible={visible}
      onClosePressed={onClosePressed}
      title={"Disclaimer"}
    >
      <Text style={styles.disclamerText}>
        The information provided by this app is for general informational
        purposes only and should not be considered a substitute for professional
        medical advice. Always consult with a qualified healthcare provider for
        diagnosis and treatment recommendations.
      </Text>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disclamerText: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "regular",
  },
});

export default React.memo(AddNoteModal);
