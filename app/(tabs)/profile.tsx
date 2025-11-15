import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from '@/assets/styles/home.styles'
import { SignOutButton } from '@/components/SignOutButton'
import { useClerk } from '@clerk/clerk-expo'

const Setting = () => {

  const { signOut } = useClerk()
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
        {text: "Cancel", style: "cancel"},
        {text: "Logout", style: "destructive", onPress: signOut}
    ])
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity style={[styles.addButton, {justifyContent: 'center', marginTop: 20}]} onPress={handleSignOut}>
        <Text style={styles.addButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Setting