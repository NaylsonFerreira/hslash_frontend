import { http } from "./http";

const userService = {
    getAllUsers: async () => {
        return http.get('users');
    },
    getUserById: async (id: number) => {
        return http.get(`users/${id}`);
    }
}

export default userService;