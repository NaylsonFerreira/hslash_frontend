import CartModel from "../models/cart";
import TransactionModel from "../models/transation";
import { http } from "./http";
import transactionService from "./transaction";

const cartService = {
    getLastCart: async () => {
        const transaction = await transactionService.getLastOpenTransaction();
        if (transaction?.id) {
            return http.get('itemCart', { transaction: transaction.id })
                .then(res => res.map((r: any) => CartModel.create(r)))
                .catch(() => []);
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