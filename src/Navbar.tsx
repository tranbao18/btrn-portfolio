import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.logo}>Nam Developer</Text>
            <View style={styles.navLinks}>
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <TouchableOpacity key={item}>
                        <Text style={styles.link}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity onPress={toggleDarkMode}>
                <Text style={styles.toggle}>{darkMode ? '🌙' : '☀️'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#1e293b',
    },
    logo: {
        color: '#38bdf8',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navLinks: {
        flexDirection: 'row',
        gap: 16,
    },
    link: {
        color: '#fff',
        marginHorizontal: 8,
    },
    toggle: {
        fontSize: 18,
        paddingHorizontal: 8,
    },
});

export default Navbar;