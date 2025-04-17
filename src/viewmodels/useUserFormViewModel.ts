import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/models/userService'
import { useRouter } from 'next/navigation'

export function useUserFormViewModel(id?: string) {
    const queryClient = useQueryClient()
    const router = useRouter()

    const { data: user, isLoading } = useQuery({
        queryKey: ['user', id],
        queryFn: () => userService.getById(id!),
        enabled: !!id,
    })

    const saveMutation = useMutation({
        mutationFn: (data: { name: string; email: string }) =>
            id ? userService.update(id, data) : userService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
            router.push('/users')
        }
    })

    return {
        user,
        isLoading,
        saveUser: saveMutation.mutate
    }
}