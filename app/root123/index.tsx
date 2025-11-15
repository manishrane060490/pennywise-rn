import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Alert, FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import { SignOutButton } from '@/components/SignOutButton'
import { useTransactions } from '@/hooks/useTransactions'
import PageLoader from '@/components/PageLoader'
import { useEffect, useState } from 'react'
import { styles } from '@/assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import BalanceCard from '@/components/BalanceCard'
import TransactionItem from '@/components/TransactionItem'
import NoTransactionsFound from '@/components/NoTransactionsFound'

export default function Page() {
    const { user } = useUser()
    const router = useRouter()
    const limit = 5;
    const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user?.id, limit);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    const deleteHandler = (id: string) => {
        Alert.alert("delete", "Are you sure you want to delete", [
            {text: "Cancel", style: "cancel"},
            {text: "Yes", style: "destructive", onPress: () => deleteTransaction(id)}
        ])
    }

    const onRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    }

    if (isLoading && !refreshing) return <PageLoader />

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={require("../../assets/images/logo.png")} style={styles.headerLogo} resizeMode='contain' />
                        <View style={styles.welcomeContainer}>
                            <Text style={styles.welcomeText}>Welcome,</Text>
                            <Text style={styles.usernameText}>{user?.emailAddresses[0]?.emailAddress.split("@")[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.addButton} onPress={() => router.push("/create")}>
                            <Ionicons name="add" size={20} color="#fff" />
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                        <SignOutButton />
                    </View>
                </View>

                <BalanceCard summary={summary} />

                <View style={styles.transactionsHeaderContainer}>
                    <Text style={styles.sectionTitle}>Recent Transactions</Text>
                    <Link href={"/Transactions"}>View All</Link>
                </View>
            </View>

            <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} onDelete={deleteHandler} />}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
        </View>
    )
}