import Image from 'next/image'
import { User } from '@/lib/type'

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <Image
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
      </div>
    </div>
  )
}