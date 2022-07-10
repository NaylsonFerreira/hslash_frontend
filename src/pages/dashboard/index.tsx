import { useEffect, useMemo, useState } from 'react';
import MenuLeft from '../../patterns/MenuLeft';
import MenuTop from '../../patterns/MenuTop';
import productService from '../../services/product';
import { BoxContainer, BoxLeft, BoxRight, Main } from './style';

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = useMemo(() => {
        productService.getAll().then(u => setProducts(u))
    }, [])

    useEffect(() => {
        getProducts
    }, [getProducts])


    return <Main>
        <MenuTop />
        <BoxContainer>
            <BoxLeft>
                <MenuLeft />
            </BoxLeft>
            <BoxRight>
                <div className="ui five cards">
                    {products.map((product, i) => {
                        return <div key={i} className="fluid card">
                            <div className="fluid image">
                                <img src="imagens/maza_spray-550x550.jpg" />
                            </div>
                            <div className="content">
                                <div className="header">R$ {product.price}</div>
                                <div className="meta">
                                    {product.shot_name}
                                </div>
                                <div className="description">
                                    {product.description}
                                </div>
                            </div>
                            <div className="extra content">
                                <button className="fluid positive ui button">Adcionar ao carrinho</button>
                            </div>
                        </div>
                    })}

                </div>
            </BoxRight>
        </BoxContainer>

    </Main>
}
export default Dashboard;