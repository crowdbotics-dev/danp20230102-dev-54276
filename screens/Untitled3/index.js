import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = ({
  navigation
}) => {
  const Test = useSelector(state => state.Test);
  const hola = useSelector(state => state.hola);
  const Login = useSelector(state => state.Login);
  return <SafeAreaView style={styles.safeArea} onPress={() => navigation.navigation.navigate("undefined", {})}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigation.navigate("Untitled2", {
        "saludo": "hola",
        "test": Login.test,
        "chau": hola.chau,
        "testttt": Test.testttt,
        "a": "hello"
      })}><View style={styles.HzhxDFZk}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HzhxDFZk: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;