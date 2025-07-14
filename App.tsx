// App.tsx (React Native version)
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import Hero from "./src/Hero";
import About from "./src/About";
import Skills from "./src/Skill";
import Projects from "./src/Projects";
import Contact from "./src/Contact";
import Navbar from "./src/Navbar";
import Footer from "./src/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const themeStyle = darkMode ? styles.dark : styles.light;

  return (
    <SafeAreaView style={[styles.container, themeStyle]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <ScrollView>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dark: {
    backgroundColor: "#0f172a",
  },
  light: {
    backgroundColor: "#f8fafc",
  }
});

export default App;
