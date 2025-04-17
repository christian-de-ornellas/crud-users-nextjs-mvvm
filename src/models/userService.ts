import axios from 'axios'
import { User } from './user'

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const api = axios.create({ baseURL: apiUrl })

export const userService = {
    getAll: () => api.get<User[]>('/users').then(res => res.data),
    getById: (id: string) => api.get<User>(`/users/${id}`).then(res => res.data),
    create: (data: Omit<User, 'id'>) => api.post('/users', data).then(res => res.data),
    update: (id: string, data: Omit<User, 'id'>) => api.put(`/users/${id}`, data).then(res => res.data),
    delete: (id: string) => api.delete(`/users/${id}`),
}