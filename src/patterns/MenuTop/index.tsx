import Link from '../../components/Link';
import { Main } from './style';

export default function MenuTop() {

    return <Main className="ui fixed inverted menu">
        <Link className="item" href='/' text='Inicio' />
        <Link className="item" href='/products' text='Produtos' />
        <Link className="item" href='/tags' text='Tags' />
        <Link className="item" href='/users' text='Usuarios' />
        <div className="right menu">
            <Link className="item" href='/cart' text='Carrinho' />
            <a className="item">Sair</a>
        </div>
    </Main>

}