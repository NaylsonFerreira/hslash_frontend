import Link from '../../components/Link';
import { Main } from './style';

export default function MenuTop() {

    return <Main className="ui inverted menu">
        <Link className="item" href='/' text='Inicio' />
        <Link className="item" href='/' text='Produtos' />
        <Link className="item" href='/' text='Tags' />
        <Link className="item" href='/users' text='Usuarios' />
        <div className="right menu">
            <Link className="item" href='/cart' text='Carrinho' />
            <a className="item">Sair</a>
        </div>
    </Main>

}