import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.log("Form submitted", { name, email, message });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Me</Text>
            <TextInput
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Your Message"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                style={[styles.input, styles.textarea]}
            />
            <Button title="Send Message" onPress={handleSubmit} color="#38bdf8" />
            <Text style={styles.contactInfo}>Phone: 0123 456 789</Text>
            <Text style={styles.contactInfo}>Email: nam@example.com</Text>
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
        marginBottom: 16,
        textAlign: "center",
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        color: 'white',
    },
    textarea: {
        height: 100,
        textAlignVertical: "top",
        color: 'white',
    },
    contactInfo: {
        marginTop: 12,
        textAlign: "center",
        fontSize: 14,
        color: 'white',
    },
});

export default Contact;
