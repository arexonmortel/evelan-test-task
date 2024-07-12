'use client'

import { useState, useEffect } from 'react'
import { User } from '@/lib/type'
import { fetchUsers } from '@/lib/api'
import UserCard from './UserCard'

interface UserListProps {
  initialUsers: User[]
  totalUsers: number
}

export default function UserList({ initialUsers, totalUsers }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setHasMore(users.length < totalUsers)
  }, [users, totalUsers])

  const loadMore = async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    try {
      const nextPage = page + 1
      const { users: newUsers } = await fetchUsers(nextPage)
      setUsers(prevUsers => [...prevUsers, ...newUsers])
      setPage(nextPage)
    } catch (error) {
      console.error('Error fetching more users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={loadMore}
          disabled={!hasMore || isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isLoading ? 'Loading...' :  'Load More' }
        </button>
      </div>
    </div>
  )
}