import { LinearProgress } from '@mui/material';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { Container } from '../../components/Container';
import Input from '../../components/Input';
import { ItemListType, List } from '../../components/List';
import { Table } from '../../components/Table';
import CartModel from '../../models/cart';
import ProductModel from '../../models/product';
import cartService from '../../services/cart';
import productService from '../../services/product';
import { Cart, Categories, Main, MenuTop, SearchBox } from './style';

const Dashboard = () => {
    const [itemCart, setItemCart] = useState<any>({ headers: [], data: [] });
    const [resultSearch, setResultSearch] = useState<ItemListType[]>([]);
    const [loading, setLoading] = useState(false);


    const handlerCart = useMemo(() => async (cart: CartModel[]) => {
        const headers = ['i', 'product_name', 'qty_item', 'price_unit', 'total_price'];
        const data = cart.map((item: CartModel, index) => ({
            i: index + 1,
            'total_price': item.totalPrice(),
            'product_name': item.product.description,
            ...item.toJSON()
        }))
        setItemCart({ headers, data })
    }, [])

    const searchProduct = () => async (search: string) => {
        if (search.length > 3) {
            setLoading(true);
            const response = await productService.search(search);
            const result = response.map((product: ProductModel) => {
                const item: ItemListType = {
                    id: product.id,
                    imageAlt: 'foto do produto',
                    title: product.shotName,
                    description: product.description,
                    secondary: `R$ ${product.price}`
                }
                return item;
            })
            setLoading(false);
            setResultSearch(result);
        } else {
            setResultSearch([]);
        }
    }

    const addToCart = async (id: string) => {
        setLoading(true);
        await cartService.addItem(parseInt(id));
        setLoading(false);
    }


    useEffect(() => {
        cartService.getLastCart().then(res => handlerCart(res));
    }, [handlerCart, loading])

    return (
        <Container>
            <MenuTop>
                <Link href="/"><a>Home</a></Link>
            </MenuTop>
            <Main>
                <Categories>
                    Categories
                </Categories>
                <Cart>
                    {loading && <LinearProgress className='fluid' />}
                    <Input onChange={searchProduct()} label="Pesquisar" />
                    {
                        resultSearch.length > 0 &&
                        <SearchBox>
                            <List items={resultSearch} onClick={addToCart} />
                        </SearchBox>
                    }
                    <Table
                        headers={itemCart.headers}
                        data={itemCart.data}
                    />
                </Cart>
            </Main>
        </Container>
    );
}
export default Dashboard;