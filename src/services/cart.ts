import { http } from "./http";

const cartService = {
    getLastCart: async () => {
        return http.get('carts/last');
    }
}

export default cartService;