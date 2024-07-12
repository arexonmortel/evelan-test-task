'use client'

import { useState } from 'react'
import { User } from '@/lib/type'
import { fetchUsers } from '@/lib/api'
import UserCard from './UserCard'

interface UserListProps {
  initialUsers: User[]
}

export default function UserList({ initialUsers }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = async () => {
    setIsLoading(true)
    const nextPage = page + 1
    const newUsers = await fetchUsers(nextPage)
    setUsers([...users, ...newUsers])
    setPage(nextPage)
    setHasMore(newUsers.length === 6)
    setIsLoading(false)
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={loadMore}
          disabled={!hasMore || isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  )
}