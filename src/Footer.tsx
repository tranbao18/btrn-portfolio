import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2025 Nam Developer. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 14,
        color: "white",
    },
});

export default Footer;
