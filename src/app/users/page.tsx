'use client'

import {useUsersViewModel} from '@/viewmodels/useUsersViewModel'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {User} from "@/models/user";

export default function UsersPage() {
    const {users, isLoading, deleteUser} = useUsersViewModel()

    if (isLoading) return <div>Carregando...</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Usuários</h1>
            <Link href="/users/new"><Button className="mb-4">Novo Usuário</Button></Link>
            <ul className="space-y-2">
                {users?.map((user: User) => (
                    <li key={user.id} className="flex justify-between border p-2 rounded">
                        <span>{user.name} - {user.email}</span>
                        <div className="space-x-2">
                            <Link href={`/users/${user.id}`}><Button variant="outline">Editar</Button></Link>
                            <Button variant="destructive" onClick={() => deleteUser(user.id)}>Excluir</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}