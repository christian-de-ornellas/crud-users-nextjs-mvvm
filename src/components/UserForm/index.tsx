'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function UserForm({ onSubmit, initialData }: { onSubmit: (data: any) => void, initialData?: any }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (initialData) {
            setName(initialData.name)
            setEmail(initialData.email)
        }
    }, [initialData])

    return (
        <form onSubmit={e => { e.preventDefault(); onSubmit({ name, email }) }} className="space-y-4">
            <div>
                <Label>Nome</Label>
                <Input value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <Label>Email</Label>
                <Input value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <Button type="submit">Salvar</Button>
        </form>
    )
}