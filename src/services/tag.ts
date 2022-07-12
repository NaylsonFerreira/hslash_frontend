import { APIResponse, APIService } from '../models/api';
import ProductModel from '../models/product';
import { http } from './http';

export const tagService: APIService = {
    getList: async (query) => {
        const response = await http.get('tags', query);
        return response as APIResponse
    },
    search: async (query: string) => {
        return http.get('tags', { search: `${query}` })
            .then(res => res.map((r: any) => ProductModel.create(r)))
            .catch(() => []);
    }
}

export default tagService;