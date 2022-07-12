import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { Container } from '../../components/Container'
import { Table } from '../../components/Table'
import { APIResponse } from '../../models/api'
import MenuTop from '../../patterns/MenuTop'
import tagService from '../../services/tag'

const Tag: NextPage = () => {
  const [tags, setTags] = useState<any[]>([])
  const headers = ['id', 'shot_name']

  const loadTags = useMemo(async () => {
    const { results = [] }: APIResponse = await tagService.getList()
    setTags(results)
  }, [])

  useEffect(() => {
    loadTags
  }, [loadTags])

  return (
    <Container>
      <MenuTop />
      {tags.length > 0 && (
        <Table headers={headers} data={Object.values(tags)} action={{ onclick: (v) => console.log(v) }} />
      )}
    </Container>
  )

}

export default Tag
