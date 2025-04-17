'use client'

import { useUsersViewModel } from '@/viewmodels/useUsersViewModel'
import Link from 'next/link'
import { User } from '@/models/user'

export default function UsersPage() {
    const { users, isLoading, deleteUser } = useUsersViewModel()

    if (isLoading) return <div className="p-4 text-gray-600">Carregando...</div>

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
            <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Usuários</h1>
                    <Link
                        href="/users/new"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Novo Usuário
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-200 rounded-md">
                        <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="text-left px-4 py-2 border-b">Nome</th>
                            <th className="text-left px-4 py-2 border-b">Email</th>
                            <th className="text-left px-4 py-2 border-b w-40">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users?.map((user: User) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-2 border-b">{user.name}</td>
                                <td className="px-4 py-2 border-b">{user.email}</td>
                                <td className="px-4 py-2 border-b">
                                    <div className="flex space-x-2">
                                        <Link
                                            href={`/users/${user.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deleteUser(user.id.toString())}
                                            className="text-red-600 hover:underline"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {users?.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-gray-500">
                                    Nenhum usuário encontrado.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}