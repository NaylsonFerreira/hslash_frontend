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
        return http.get(`transactions`, { ordering: '-id', status: 0, limit: 1 });
    }
}

export default transactionService;