import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const skills = [
    { name: "HTML5", icon: "html5", color: "#e34f26" },
    { name: "CSS3", icon: "css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "js", color: "#f7df1e" },
    { name: "React", icon: "react", color: "#61dafb" },
    { name: "Node.js", icon: "node-js", color: "#339933" },
    { name: "Git", icon: "git-alt", color: "#f05032" },
];

const Skills: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Skills</Text>
            <FlatList
                data={skills}
                keyExtractor={(item) => item.name}
                horizontal
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.skillItem}>
                        <FontAwesome5 name={item.icon as any} size={40} color={item.color} />
                        <Text style={styles.skillName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: 'white',
    },
    list: {
        gap: 20,
    },
    skillItem: {
        alignItems: "center",
        marginHorizontal: 12,
    },
    skillName: {
        marginTop: 8,
        fontSize: 14,
        color: 'white',
    },
});

export default Skills;
