import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const About: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.description}>
                I am Nam, a software developer with years of experience in building scalable web applications. Currently working as a Frontend Developer.
            </Text>
            <Image
                source={{ uri: "https://namdeveloper.netlify.app/static/media/profile-pic.12345.jpg" }}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: 'white',
    },
    description: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 16,
        color: 'white',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
});

export default About;
