import BaseModel from "./base";

export class UserModel extends BaseModel {
    name = '';
    email = '';

    constructor() {
        super();
    }
}

export default UserModel;