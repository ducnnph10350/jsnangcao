import {api2} from './axios';

const prefix = '/products';

export const getProducts = () => api2.get(prefix);
export const deleteProduct = (id) => api2.delete(`${prefix}/${id}`);
export const getProduct = (id) => api2.get(`${prefix}/${id}`);
export const createProduct = (data) => api2.post(prefix, data);


