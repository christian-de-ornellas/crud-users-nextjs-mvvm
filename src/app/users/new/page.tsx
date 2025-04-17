'use client'

import { useUserFormViewModel } from '@/viewmodels/useUserFormViewModel'
import { UserForm } from '@/components/UserForm'

export default function NewUserPage() {
    const { saveUser } = useUserFormViewModel()

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Novo Usuário
                </h1>
                <UserForm onSubmit={saveUser} />
            </div>
        </main>
    )
}