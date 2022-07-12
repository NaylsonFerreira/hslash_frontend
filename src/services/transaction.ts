import { APIResponse } from '../models/api';
import TransactionModel from '../models/transation';
import { http } from './http';

const transactionService = {
    getAllTransactions: async () => {
        return http.get('transactions');
    },
    getTransactionById: async (id: number) => {
        return http.get(`transactions/${id}`);
    },
    getTransactionsByStatus: async (status: number) => {
        return http.get('transactions', { status });
    },
    getLastOpenTransaction: async () => {
        const { results = [new TransactionModel()] }: APIResponse = await http.get('transactions', { ordering: '-id', status: 0, limit: 1 })
        return results[0]
    },
    createTransaction: async (transaction: TransactionModel) => {
        return http.post('transactions', transaction);
    }

}

export default transactionService;