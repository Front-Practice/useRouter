import React from 'react'
import { useAppSelector } from '../../store/hooks'

const UsersPage = () => {
  const users = useAppSelector(s => s.users.users)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.length === 0 && <div className="text-gray-500">No users added yet.</div>}
        {users.map(u => (
          <div key={u.id} className="rounded border bg-white p-4 shadow-sm">
            <div className="text-lg font-semibold">{u.name}</div>
            <div className="text-sm text-gray-700">Age: {u.age}</div>
            <div className="text-sm text-gray-700">Email: {u.email}</div>
            <div className="text-sm text-gray-700">Address: {u.address}</div>
            <div className="text-sm text-gray-700">Phone: {u.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(UsersPage)
 

