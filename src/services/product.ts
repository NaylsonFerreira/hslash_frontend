import ProductModel from "../models/product";
import { http } from "./http";

export const productService = {
    getAll: async () => {
        return http.get('products').then(res => res.data).catch(() => null);
    },
    getById: async (id: number | string) => {
        return http.get(`products/${id}`).then(res => res.data).catch(() => null);
    },
    search: async (query: string) => {
        return http.get('products', { search: `${query}` })
            .then(res => res.map((r: any) => ProductModel.create(r)))
            .catch(() => []);
    }
}

export default productService;