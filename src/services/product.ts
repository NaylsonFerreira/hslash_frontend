import { APIService } from '../models/api';
import ProductModel from '../models/product';
import { http } from './http';

export const productService: APIService = {
    getList: async (query) => {
        const response = await http.get('products', query);
        return response
    },
    search: async (query: string) => {
        return http.get('products', { search: `${query}` })
            .then(res => res.map((r: any) => ProductModel.create(r)))
            .catch(() => []);
    }
}

export default productService;