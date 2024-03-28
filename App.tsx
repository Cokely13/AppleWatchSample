import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

function Home() {
  const xPosition = useSharedValue(0);
  const yPosition = useSharedValue(0);
  const zPosition = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    const xRotationVal = xPosition.value * 90;
    const yRotationVal = yPosition.value * 90;

    return {
      height: 225,
      width: 225,
      display: "flex",
      backgroundColor: "black",
      justifyContent: "center",
      borderRadius: 40,
      transform: [
        {
          perspective: 300,
        },
        {
          rotateX: `${yRotationVal}deg`,
        },
        {
          rotateY: `${xRotationVal}deg`,
        },
      ],
    };
  }, [xPosition, yPosition, zPosition]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View style={style}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>Hello, world!</Text>
        </View>
        <View
          style={{
            backgroundColor: "#3b3b3b",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginHorizontal: 30,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>SEND</Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
