import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL
});

const mockApi = axios.create({
    baseURL: import.meta.env.VITE_MOCKAPI_BASEURL
});


export const getProductsByCategory = async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
};


export const getProducts = async () => {
    const response = await api.get("/products?limit=0");
    return await response.data;
};

export const getCategories = async () => {
    const response = await api.get("/products/categories");
    return response.data;
};

export const createUser = async (data) => {
    const response = await mockApi.post("/users", data);
    return response;
};

export const authUser = async (data) => {
    const response = await mockApi.get("/users?email=" + data.email);
    return await response;
};

export const getUserById = async (id) => {
    const response = await mockApi.get("/users?id=" + id);
    return await response;
};


export const updateUser = async (data) => {
    const response = await mockApi.put("/users/" + data.id, data);
    return await response;
}

export const createOrder = async (data) => {
    const response = await mockApi.post("/ordersDetail", data);
    return response;
};

export const getOrdersByUserId = async (userId) => {
    const response = await mockApi.get(
        "/ordersDetail?UserId=" + userId
    );

    return response;
};

export const getOrderById = async (id) => {
    const response = await mockApi.get(
        "/ordersDetail?id=" + id
    );

    return response;
};