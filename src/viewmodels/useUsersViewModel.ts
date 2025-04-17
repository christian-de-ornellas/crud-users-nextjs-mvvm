import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/models/userService'

export function useUsersViewModel() {
    const queryClient = useQueryClient()

    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: userService.getAll
    })

    const deleteMutation = useMutation({
        mutationFn: userService.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
    })

    const deleteUserWithConfirmation = (id: string) => {
        const confirmed = window.confirm('Tem certeza que deseja excluir este usuário?')
        if (confirmed) {
            deleteMutation.mutate(id)
        }
    }

    return {
        users,
        isLoading,
        deleteUser: deleteUserWithConfirmation,
    }
}