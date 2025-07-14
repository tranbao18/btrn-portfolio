import { View, Text, TouchableOpacity } from "react-native";

const Navbar = () => {
    return (
        <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() => { }}>
                <Text style={{ color: "#38bdf8" }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Text style={{ color: "#38bdf8" }}>Projects</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;
