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
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    })

    return {
        users,
        isLoading,
        deleteUser: deleteMutation.mutate
    }
}