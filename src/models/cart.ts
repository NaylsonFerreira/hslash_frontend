import BaseModel from "./base";
import ProductModel from "./product";
import TransactionModel from "./transation";


export class CartModel extends BaseModel {
    product: ProductModel = new ProductModel();
    transaction: TransactionModel = new TransactionModel();
    priceUnit: number = 0;
    qtyItem: number = 0;

    constructor() {
        super();
    }

    totalPrice(): number {
        return this.priceUnit * this.qtyItem;
    }

}

export default CartModel;