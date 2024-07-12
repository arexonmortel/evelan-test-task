import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evelan User Lists',
  description: 'Explore our comprehensive Evelan users lists with detailed information and avatars.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
        Welcome to Evelan User List
      </h1>
      <p className="text-lg md:text-xl mb-4 md:mb-8 text-center max-w-2xl">
        Explore our comprehensive list of users, complete with detailed information and avatars.
      </p>
      <Link 
        href="/users" 
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        View Users
      </Link>
    </main>
  )
}
