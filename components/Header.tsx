import { styles } from "@/assets/styles/home.styles";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
    const { user } = useUser()
    const router = useRouter()
  return (
    <View style={[styles.container, {paddingBottom: 0, flex: 0} ]}>
      <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={require("../assets/images/logo.png")} style={styles.headerLogo} resizeMode='contain' />
                        <View style={styles.welcomeContainer}>
                            <Text style={styles.welcomeText}>Welcome,</Text>
                            <Text style={styles.usernameText}>{user?.emailAddresses[0]?.emailAddress.split("@")[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.addButton} onPress={() => router.push("Create")}>
                            <Ionicons name="add" size={20} color="#fff" />
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                        {/* <SignOutButton /> */}
                    </View>
                </View>
    </View>
  );
}