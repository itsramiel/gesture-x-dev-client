import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function App() {
  const translateX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: translateX.value }] };
  }, []);

  const gesture = Gesture.Pan().onUpdate((e) => {
    translateX.value = e.translationX;
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, rStyle]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});
