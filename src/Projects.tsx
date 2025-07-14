import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Linking } from "react-native";

const projects = [
    {
        id: "1",
        title: "News Website",
        description: "A website to manage and publish news articles with user roles.",
        tech: "PHP, MySQL",
        imageUrl: "https://via.placeholder.com/600x400?text=News+Website",
        link: "https://example.com/news",
    },
    {
        id: "2",
        title: "Portfolio React",
        description: "A portfolio site built with React and TailwindCSS.",
        tech: "React, HTML5, CSS3",
        imageUrl: "https://via.placeholder.com/600x400?text=Portfolio+React",
        link: "https://namdeveloper.netlify.app",
    },
];

const Projects: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.name}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.tech}>{item.tech}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.button}>
                            <Text style={styles.buttonText}>View Project</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: 'white',
    },
    card: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10,
        marginBottom: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 6,
    },
    tech: {
        marginTop: 6,
        fontStyle: "italic",
        color: "#555",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#38bdf8",
        padding: 10,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default Projects;
