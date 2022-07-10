import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { Table } from '../../components/Table'
import { User } from '../../models/user'
import MenuTop from '../../patterns/MenuTop'
import userService from '../../services/user'

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (users?.length === 0) {
      userService.getAllUsers().then(setUsers)
    }
  }, [users])

  return (
    <Container>
      <MenuTop />
      {users?.length > 0 && (
        <Table headers={Object.keys(users[0] || {})} data={Object.values(users)} action={{ onclick: (v) => console.log(v) }} />
      )}
    </Container>
  )

}

export default Home
