import { useEffect, useMemo, useState } from 'react';
import tagService from '../../services/tag';
import { Main } from './style';

export default function MenuLeft() {
    const [tags, setTags] = useState([]);

    const getTags = useMemo(() => {
        tagService.getAll().then(u => setTags(u))
    }, [])

    useEffect(() => {
        getTags
    }, [getTags])

    return <Main className="ui vertical menu">
        <div className="item">
            <div className="header">Preço</div>
            <div className="menu">
                <a className="item">De 1 a 50 R$</a>
                <a className="item">Maior de 50 R$</a>
            </div>
        </div>
        <div className="item">
            <div className="header">Filtros</div>
            <div className="menu">
                {tags.map((tag, i) => <a key={i} className="item">{tag.shot_name}</a>)}
            </div>
        </div>
    </Main>
}