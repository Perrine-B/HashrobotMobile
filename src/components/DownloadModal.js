import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
  Vibration,
} from "react-native";
import Avatar from "../components/Avatar";

export default function DownloadModal(props) {
  const {
    robot,
    downloadImage,
    confirmDownload,
    resetConfirmation,
    loader,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isFileDownloaded, setIsFileDownloaded] = useState("");

  useEffect(() => {
    const ONE_SECOND_IN_MS = 1000;
    if (confirmDownload === true) {
      setIsFileDownloaded(true);
      Vibration.vibrate(ONE_SECOND_IN_MS);
    } else {
      setIsFileDownloaded(false);
    }
  }, [confirmDownload]);

  const handleDownload = async () => {
    await downloadImage();
    await setIsFileDownloaded(true);
  };

  const resetProcess = () => {
    setIsFileDownloaded(false);
    setModalVisible(!modalVisible);
    resetConfirmation();
  };

  const classic = (
    <>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textStyle}>Annuler</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonConfirm]}
        onPress={() => handleDownload()}
      >
        <Text style={styles.textStyle}>Confirmer</Text>
      </Pressable>
    </>
  );

  const spinner = (
    <ActivityIndicator style={{ height: 200 }} size="small" color="#A2AA39" />
  );

  const confirmationButton = (
    <>
      <Text style={styles.textStyle}>Telechargement terminé</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => resetProcess()}
      >
        <Text style={styles.textStyle}>Quitter</Text>
      </Pressable>
    </>
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {isFileDownloaded && !loader ? (
              <Text style={styles.modalText}>Avatar téléchargé !</Text>
            ) : (
              <Text style={styles.modalText}>Télécharger l'avatar ?</Text>
            )}
            {!loader && robot !== "" ? (
              <Avatar url={robot} format={80} />
            ) : (
              spinner
            )}
            <View style={styles.buttonSection}>
              {isFileDownloaded && !loader ? confirmationButton : classic}
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Télécharger</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 400,
  },
  buttonSection: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#A2AA39",
  },
  buttonClose: {
    backgroundColor: "#8B2635",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonConfirm: {
    backgroundColor: "#0E6BA8",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
