import { useCallback, useState } from "react";
import { Alert } from "react-native"; 

const API_URL = "http://localhost:5000/api";

export const useTransactions = (userId) => {
    const [transactions, setTransactions] = useState([]);
    const [summary,setSummary]= useState({
        balance:0,
        income:0,
        expense:0,
    });

    const [isLoading, setIsLoading] = useState(true);

    const fetchTransactions= useCallback(async()=>{
        try{
            const repsonse= await fetch(`${API_URL}/transactions/${userId}`);
            const data = await Response.json();
            setTransactions(data);
        }catch(error){
            console.error("Error fetching transactions:", error);
        }
    },[userId]);

    const fetchSummary= useCallback(async()=>{
        try{
            const repsonse= await fetch(`${API_URL}/transactions/summary/${userId}`);
            const data = await Response.json();
            setSummary(data);
        }catch(error){
            console.error("Error fetching Summary:", error);
        }
    },[userId]);

    const loadData= useCallback(async()=>{
        if (!userId) return;
        setIsLoading(true);
        try{

            await Promise.all([fetchTransactions(), fetchSummary()]);
        }catch(error){
            console.error("Error fetching transactions:", error);
        } finally{
            setIsLoading(false);
        }
    },[fetchTransactions,fetchSummary,userId]);

    const deleteTransactions= async(id)=>{
        try{
            const repsonse= await fetch(`${API_URL}/transactions/${id}`,{method:"DELETE"});
            if(!Response.ok) throw new Error("Failed to delete transaction");
            loadData();
            Alert.alert("Success","Transaction deleted successfully");
            
        }catch(error){
            console.error("Error deleting transactions:", error);
            Alert.alert("error",error.message);
        }
    };

    return{
        transactions,
        summary,
        isLoading,
        loadData,
        deleteTransactions
    };
}