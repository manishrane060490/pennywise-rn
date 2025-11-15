import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot, Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeScreen>
        {/* <Slot /> */}
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
      </SafeScreen>
    </ClerkProvider>
  )
}
