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
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response))
        })
    }
}

export default authService;