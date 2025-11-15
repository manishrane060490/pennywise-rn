import { API_URL } from "@/constants/api"
import { useCallback, useState } from "react"
import { Alert } from "react-native"

export const useTransactions = (userId: string | undefined, limit?: number | undefined) => {
    const [transactions, setTransactions] = useState([])
    const [summary, setSummary] = useState({
        balance: 0,
        expense: 0,
        income: 0
    })
    const [isLoading, setIsLoading] = useState(false);

    const fetchTransactions = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}${limit ? `?limit=${limit}` : ""}`)
            const data = await response.json();
            // console.log(data);
            setTransactions(data);
        } catch(error) {
            console.log("Error fetching transactions:", error)
        }
    }, [userId])

    const fetchSummary = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/summary/${userId}`)
            const data = await response.json();
            // console.log(data);
            setSummary(data)
        } catch (error) {
            console.log("Error fetching summary:", error)
        }
    }, [userId])

    const loadData = useCallback(async () => {
        if(!userId) return;

        setIsLoading(true);
        try {
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchTransactions, fetchSummary, userId])

    const deleteTransaction = async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`, {method: "DELETE"});
            if(!response.ok) throw new Error("Failed to delete transaction");

            loadData();
            Alert.alert("Success", "Transaction deleted successfully");
        } catch (error:any) {
            console.error("Error deleting transactions:", error);
            Alert.alert("Error", error.message)
        }
    }

    return {transactions, summary, isLoading, loadData, deleteTransaction};
}