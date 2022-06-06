import UserModel from "../models/user";
import { http } from "./http"


const authService = {
    login: async (email: string, password: string) => {
        return http.post('auth/login', { username: email, password })
            .then(response => {
                if (response.token) {
                    localStorage.setItem('token', response.token)
                    authService.getMe()
                    window.location.href = '/';
                }
            }).catch(err => {
                console.error(err);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
    },
    getMe: async () => {
        return http.get('auth/me').then(response => {
            const user = new UserModel();
            const userJson = user.fromJSON(response);
            localStorage.setItem('user', JSON.stringify(userJson))
            return user;
        })
    }
}

export default authService;