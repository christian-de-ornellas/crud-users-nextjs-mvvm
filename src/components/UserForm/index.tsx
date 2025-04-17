'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { userSchema, UserFormSchema } from '@/models/userSchema'
import React from "react";

export function UserForm({
                             onSubmit,
                             initialData,
                         }: {
    onSubmit: (data: UserFormSchema) => void
    initialData?: UserFormSchema
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserFormSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })


    React.useEffect(() => {
        if (initialData) reset(initialData)
    }, [initialData, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" {...register('name')} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...register('email')} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <Button type="submit">Salvar</Button>
        </form>
    )
}