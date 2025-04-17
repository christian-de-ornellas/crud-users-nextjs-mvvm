'use client'

import { useUserFormViewModel } from '@/viewmodels/useUserFormViewModel'
import { UserForm } from '@/components/UserForm'

export default function NewUserPage() {
    const { saveUser } = useUserFormViewModel()
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Novo Usuário</h1>
            <UserForm onSubmit={saveUser} />
        </div>
    )
}