import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  Image,
} from "react-native";

function GoalInput({ goalInput, goalInputHandler, addGoalHandler }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <View style={styles.openModalView}>
        <Pressable
          android_ripple={{
            color: "#dddddd",
          }}
          onPress={() => setOpenModal(true)}
          style={styles.openModalButton}
        >
          <Text style={styles.openModalButtonText}>ADD NEW GOAL</Text>
        </Pressable>
      </View>

      <Modal
        visible={openModal}
        animationType="slide"
        onRequestClose={() => setOpenModal(false)}
      >
        <View style={styles.formStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/image/goal.png")}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Your course goal"
            cursorColor="white"
            value={goalInput}
            onChangeText={goalInputHandler}
            placeholderTextColor="white"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                style={styles.buttonStyle}
                onPress={addGoalHandler}
                title="Add goal"
                color="#1425c5"
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.buttonStyle}
                onPress={() => setOpenModal(false)}
                title="Cancel"
                color="#f31282"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e0acc",
  },
  textInputStyle: {
    borderColor: "white",
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    color: "black",
    fontSize: 16,
    width: "75%",
    marginRight: 8,
    borderRadius: 10,
    color: "white",
  },
  buttonStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 12,
  },
  button: {
    width: "33%",
    margin: 8,
  },
  openModalView: {
    marginTop: 12,
  },
  openModalButton: {
    borderRadius: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "blue",
  },
  openModalButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
