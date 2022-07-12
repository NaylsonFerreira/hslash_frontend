import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { Container } from '../../components/Container'
import { Table } from '../../components/Table'
import { APIResponse } from '../../models/api'
import MenuTop from '../../patterns/MenuTop'
import productService from '../../services/product'

const Product: NextPage = () => {
  const [products, setProducts] = useState<any[]>([])
  const headers = ['id', 'shot_name', 'description', 'bar_code', 'price', 'amount']

  const loadProducts = useMemo(async () => {
    const { results = [] }: APIResponse = await productService.getList()
    setProducts(results)
  }, [])

  useEffect(() => {
    loadProducts
  }, [loadProducts])

  return (
    <Container>
      <MenuTop />
      {products.length > 0 && (
        <Table headers={headers} data={Object.values(products)} action={{ onclick: (v) => console.log(v) }} />
      )}
    </Container>
  )

}

export default Product
