import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, deleteItemHandler, index }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#210644",
          borderRadius: 8,
        }}
        onPress={deleteItemHandler.bind(this, index)}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    fontSize: 16,
    padding: 10,
    color: "#fff",
    textTransform: "capitalize",
  },
});
