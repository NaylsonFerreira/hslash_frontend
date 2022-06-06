import authService from "../services/auth";
import BaseModel from "./base";
import UserModel from "./user";


export class TransactionModel extends BaseModel {
    seller: undefined | number = undefined;

    constructor() {
        super();
        this.setSeller()
    }

    async setSeller(user: UserModel | undefined = undefined) {
        if (!user) {
            await authService.getMe().then(user => { this.seller = user.id; });
        } else {
            this.seller = user.id;
        }
    }
}

export default TransactionModel;