'use client'

import {useParams} from 'next/navigation'
import {useUserFormViewModel} from '@/viewmodels/useUserFormViewModel'
import {UserForm} from '@/components/UserForm'

export default function EditUserPage() {
    const {id} = useParams<{ id: string }>()
    const {user, saveUser, isLoading} = useUserFormViewModel(id)

    if (isLoading) return <div>Carregando...</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Usuário</h1>
            <UserForm onSubmit={saveUser} initialData={user}/>
        </div>
    )
}