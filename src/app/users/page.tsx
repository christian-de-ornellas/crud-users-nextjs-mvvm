'use client'

import {useUsersViewModel} from '@/viewmodels/useUsersViewModel'
import Link from 'next/link'
import {User} from "@/models/user"

export default function UsersPage() {
    const {users, isLoading, deleteUser} = useUsersViewModel()

    if (isLoading) return <div className="p-4 text-gray-600">Carregando...</div>

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
            <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Usuários</h1>
                    <Link href="/users/new"
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Novo Usuário
                    </Link>
                </div>

                <ul className="space-y-4">
                    {users?.map((user: User) => (
                        <li
                            key={user.id}
                            className="flex justify-between items-center border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                        >
                            <div className="text-gray-700">
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>

                            <div className="flex space-x-2">
                                <Link
                                    href={`/users/${user.id}`}
                                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100 transition"
                                >
                                    Editar
                                </Link>
                                <button
                                    onClick={() => deleteUser(user.id.toString())}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}