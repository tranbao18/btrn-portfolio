import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Hero: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, I'm Nam</Text>
            <Text style={styles.subtitle}>A passionate Web Developer with expertise in React, Node.js, and more.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contact Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 12,
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: 'white',
    },
    button: {
        backgroundColor: "#38bdf8",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#0f172a",
        fontWeight: "600",
    },
});

export default Hero;
