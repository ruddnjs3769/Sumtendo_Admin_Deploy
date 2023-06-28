import { useState, useEffect } from 'react'
import ProductsTable from '../components/ProductsTable'
import Loading from '../components/Loading'
import { User, getUsers } from '../apis/admin/users'
import UsersTable from '../components/UsersTable'

export default function Users() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    getUsers().then((users: User[]) => {
      setUsers(users)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  console.log(users)
  return (
    <div>
      <UsersTable users={users}></UsersTable>
    </div>
  )
}
