'use client'

import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  username: string;
  role: string; // sesuaikan dengan respons API kamu
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/users', {
          method: 'GET',
          credentials: 'include', // penting supaya cookie JWT ikut
        })
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const json = await res.json()

        if (json.errors) {
          throw new Error(json.errors)
        }

        // sesuaikan struktur respons API kamu
        setUsers(json.data.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unknown error')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading…</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Users</h1>
      <ul className="mt-4 space-y-2">
        {users.map((user) => (
          <li key={user.username} className="p-2 border rounded">
            <div className="font-semibold">{user.username}</div>
            <div className="text-sm text-gray-600">{user.role}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
