import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { Container } from '../../components/Container'
import { Table } from '../../components/Table'
import { APIResponse } from '../../models/api'
import MenuTop from '../../patterns/MenuTop'
import userService from '../../services/user'

const Home: NextPage = () => {
  const [users, setUsers] = useState<any[]>([])
  const headers = ['id', 'username', 'first_name', 'last_name', 'email']

  const loadUsers = useMemo(async () => {
    const { results = [] }: APIResponse = await userService.getList()
    setUsers(results)
  }, [])

  useEffect(() => {
    loadUsers
  }, [loadUsers])

  return (
    <Container>
      <MenuTop />
      {users?.length > 0 && (
        <Table headers={headers} data={Object.values(users)} action={{ onclick: (v) => console.log(v) }} />
      )}
    </Container>
  )

}

export default Home
