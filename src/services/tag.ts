import ProductModel from '../models/product';
import { http } from './http';

export const tagService = {
    getAll: async () => {
        return http.get('tags').then(res => res).catch(() => null);
    },
    getById: async (id: number | string) => {
        return http.get(`tags/${id}`).then(res => res).catch(() => null);
    },
    search: async (query: string) => {
        return http.get('tags', { search: `${query}` })
            .then(res => res.map((r: any) => ProductModel.create(r)))
            .catch(() => []);
    }
}

export default tagService;