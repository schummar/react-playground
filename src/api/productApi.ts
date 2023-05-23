import { createCache } from 'cross-state';
import { Product } from '../types/product';

export const productApi = {
    listProducts: createCache(async () => {
        const response = await fetch('https://dummyjson.com/products');
        return await response.json() as Product[];
    }),
};
