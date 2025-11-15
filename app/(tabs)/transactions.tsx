import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Alert, FlatList, Image, RefreshControl, SectionList, Text, TouchableOpacity, View } from 'react-native'
import { SignOutButton } from '@/components/SignOutButton'
import { useTransactions } from '@/hooks/useTransactions'
import PageLoader from '@/components/PageLoader'
import { useEffect, useState } from 'react'
import { styles } from '@/assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import TransactionItem from '@/components/TransactionItem'
import NoTransactionsFound from '@/components/NoTransactionsFound'
import { COLORS } from '@/constants/colors'

export default function TransactionsScreen() {
    const { user } = useUser()
    const router = useRouter()
    const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user?.id);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    const groupByDate = (data) => {
        return data.reduce((acc, item) => {
            const dateObj = new Date(item.created_at);
        
            // Format date using local time (not UTC)
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const day = String(dateObj.getDate()).padStart(2, "0");
        
            const date = `${year}-${month}-${day}`;
        
            if (!acc[date]) acc[date] = [];
            acc[date].push(item);
        
            return acc;
          }, {});
    };

    const grouped = groupByDate(transactions);

    const sections = Object.keys(grouped).map(date => ({
        title: date,
        data: grouped[date],
    }));

    const deleteHandler = (id: string) => {
        Alert.alert("delete", "Are you sure you want to delete", [
            { text: "Cancel", style: "cancel" },
            { text: "Yes", style: "destructive", onPress: () => deleteTransaction(id) }
        ])
    }

    const onRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    }

    if (isLoading && !refreshing) return <PageLoader />

    console.log(JSON.stringify(sections))

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {/* <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.addButton} onPress={() => router.push("/")}>
                            <Ionicons name="arrow-back" size={20} color="#fff" />
                        </TouchableOpacity>
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
                </View> */}

                {/* <BalanceCard summary={summary} /> */}

                <View style={styles.transactionsHeaderContainer}>
                    <Text style={styles.sectionTitle}>Recent Transactions</Text>
                </View>
            </View>

            {/* <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} onDelete={deleteHandler} />}
        
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      /> */}

            <SectionList
                style={styles.transactionsList}
                contentContainerStyle={styles.transactionsListContent}
                sections={sections}
                keyExtractor={(item) => item.id.toString()}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 20, color: COLORS.text }}>{title}</Text>
                )}
                renderItem={({ item }) => <TransactionItem item={item} onDelete={deleteHandler} />}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    )
}