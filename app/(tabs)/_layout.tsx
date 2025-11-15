import { styles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import { SignOutButton } from "@/components/SignOutButton";
import { COLORS } from "@/constants/colors";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Redirect, Stack, Tabs, useRouter } from "expo-router";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";

export default function Layout() {
    // const {isSignedIn, isLoaded} = useUser();

    // if(!isLoaded) return null

    // if(!isSignedIn) return <Redirect href={"/sign-in"} />

    return (
        <>
        <Header />
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.background,
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                    marginHorizontal: 50,
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    borderRadius: 30,
                    height: Platform.OS === 'android' ? 40 : 63,
                    borderWidth: 1,
                    borderTopWidth: 1,
                    borderColor: '#333',
                    borderTopColor: '#333'
                },
                tabBarItemStyle: {
                    paddingBottom: 0
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#f2f2f2',
                tabBarActiveTintColor: 'white'
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            borderRadius: 30,
                            backgroundColor: focused ? "#0a7ea4" : "gray",
                            paddingBottom: 0,
                            width: 40,
                            marginBottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            position: 'absolute',
                            display: 'flex',
                            top: -2
                        }}>
                            <SimpleLineIcons name="pie-chart" size={18} color={color} />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="scan"
                options={{
                    title: 'Scan',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            borderRadius: 30,
                            backgroundColor: focused ? "#0a7ea4" : "gray",
                            paddingBottom: 0,
                            width: 40,
                            marginBottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            position: 'absolute',
                            display: 'flex',
                            top: -2
                        }}>
                            <AntDesign name="scan" size={18} color={color} />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: 'Transactions',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            borderRadius: 30,
                            backgroundColor: focused ? "#0a7ea4" : "gray",
                            paddingBottom: 0,
                            width: 40,
                            marginBottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            position: 'absolute',
                            display: 'flex',
                            top: -2
                        }}>
                            <AntDesign name="swap" size={18} color={color} />
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            borderRadius: 30,
                            backgroundColor: focused ? "#0a7ea4" : "gray",
                            paddingBottom: 0,
                            width: 40,
                            marginBottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            position: 'absolute',
                            display: 'flex',
                            top: -2
                        }}>
                            <SimpleLineIcons name="user" size={18} color={color} />
                        </View>
                    )
                }}
            />
        </Tabs>
        </>
    )
}   