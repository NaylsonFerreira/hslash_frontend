import BaseModel from "./base";

class ProductModel extends BaseModel {
    shotName: string = '';
    description: string = '';
    barCode: string = '';
    price: number = 0;
    amount: number = 0;

    constructor() {
        super();
    }

}

export default ProductModel;