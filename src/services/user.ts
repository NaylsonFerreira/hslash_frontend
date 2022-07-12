import { APIResponse, APIService } from '../models/api';
import { http } from './http';

const userService: APIService = {
    getList: async (query) => {
        const response = await http.get('users', query);
        return response as APIResponse;
    },
    search: function (query: string): {} {
        throw new Error('Function not implemented.');
    }
}

export default userService;