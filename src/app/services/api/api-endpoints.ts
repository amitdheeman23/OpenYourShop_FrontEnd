export const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        register: 'auth/register'
    },
    user: {
        profile: '/user/profile',
        update: 'user/update'
    },
    product: {
        list: '/products',
        details: (id: number) => `/product/${id}`
    }
}