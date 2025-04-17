import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(3, 'Nome deve ter pelo menos 3 letras'),
    email: z.string().email('Email inválido'),
})

export type UserFormSchema = z.infer<typeof userSchema>