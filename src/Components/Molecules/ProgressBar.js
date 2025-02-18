import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ scrollX, width, data }) => {
  return (
    <View style={styles.progressBar}>
      {data.map((_, index) => {
        const isActive = Math.round(scrollX / width) === index;
        return (
          <View
            key={index}
            style={[
              styles.progressSegment,
              {
                width: isActive
                  ? width * 0.3
                  : (width * 0.4) / (data.length - 1),
                opacity: isActive ? 1 : 0.5,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  progressSegment: {
    height: 5,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default ProgressBar;
