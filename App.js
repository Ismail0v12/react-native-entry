import { Alert, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./src/components/goal-items";
import GoalInput from "./src/components/goal-input";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandler(text) {
    setGoalInput(text);
  }

  function addGoalHandler() {
    if (goalInput.length !== 0) {
      setGoals((prevGoals) => [...prevGoals, goalInput]);
      setGoalInput("");
      Alert.alert("Successfully added");
    } else {
      Alert.alert("Please fill the field");
    }
  }

  function deleteItemHandler(index) {
    setGoals((prevGoals) => {
      return prevGoals.filter((item, itemIndex) => index !== itemIndex);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInput={goalInput}
          goalInputHandler={goalInputHandler}
        />
        <View style={styles.listGoals}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                key={itemData.index}
                text={itemData.item}
                index={itemData.index}
                deleteItemHandler={deleteItemHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 50,
  },
  listGoals: {
    flex: 5,
    borderColor: "#ccc",
  },
});
