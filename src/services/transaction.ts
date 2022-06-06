import TransactionModel from "../models/transation";
import { http } from "./http";

const transactionService = {
    getAllTransactions: async () => {
        return http.get('transactions');
    },
    getTransactionById: async (id: number) => {
        return http.get(`transactions/${id}`);
    },
    getTransactionsByStatus: async (status: number) => {
        return http.get(`transactions`, { status });
    },
    getLastOpenTransaction: async () => {
        return http.get(`transactions`, { ordering: '-id', status: 0, limit: 1 })
            .then(res => TransactionModel.create(res[0]))
            .catch(() => null);
    },
    createTransaction: async (transaction: TransactionModel) => {
        return http.post('transactions', transaction);
    }

}

export default transactionService;