'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { userSchema, UserFormSchema } from '@/models/userSchema'
import React from 'react'

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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium text-gray-700">
                    Nome
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
                Salvar
            </button>
        </form>
    )
}