import { Suspense } from 'react'
import UserList from '@/components/UserList'
import { fetchUsers } from '@/lib/api'

export const metadata = {
  title: 'Evelan Users List',
  description: 'List of Evelan users with detailed information',
}

export default async function UsersPage() {
  const initialUsers = await fetchUsers(1)

  return (
    <main className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">User List</h1>
      <div className="flex-grow">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <UserList initialUsers={initialUsers} />
        </Suspense>
      </div>
    </main>
  )
}