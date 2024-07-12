import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Evelan User Lists',
  description: 'Explore our comprehensive Evelan users lists with detailed information and avatars.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Evelan User List</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Explore our comprehensive list of users, complete with detailed information and avatars.
      </p>
      <Link 
        href="/users" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        View Users
      </Link>
    </main>
  )
}