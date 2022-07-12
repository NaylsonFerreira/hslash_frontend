import { APIResponse } from '../models/api';
import CartModel from '../models/cart';
import { http } from './http';
import transactionService from './transaction';

const cartService = {
    getLastCart: async () => {
        const transaction = await transactionService.getLastOpenTransaction();
        if (transaction?.id) {
            const { results = [] }: APIResponse = await http.get('itemCart', { transaction: transaction.id })
            return results.map((r: any) => CartModel.create(r))
        } else {
            return [];
        }
    },
    addItem: async (id_product: number, qty: number = 1) => {
        return http.post('item_in_cart', { id_product, qty })
    },
    removeItem: async (id_product: number, qty: number = -1) => {
        return http.post('item_in_cart', { id_product, qty })
    }
}

export default cartService;