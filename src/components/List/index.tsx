import { Avatar, Divider, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import { ReactNode } from "react";
import { ListMain, ItemBox } from "./style";


export type ItemListType = {
    id: number | string,
    imageUrl?: string,
    imageAlt?: string,
    title: string,
    description: string,
    secondary: string | ReactNode,
}

type Props = {
    items?: ItemListType[];
    onClick?: (id: string) => void
}

const ItemTemplate: ItemListType = {
    id: 1,
    imageUrl: "https://m.media-amazon.com/images/I/51eulL9aN2L._AC_SY450_.jpg",
    imageAlt: "imageAlt",
    title: "Title",
    description: "Description",
    secondary: "Secondary"
}

export const List = ({
    items = [ItemTemplate],
    onClick = (id: string) => console.log(id)   
}: Props) => {
    return (
        <ListMain>
            {items.map((item, key) => (
                <ItemBox key={key}>
                    <ListItem onClick={() => onClick(`${item.id}`)} secondaryAction={item.secondary}>
                        <ListItemAvatar>
                            <Avatar
                                alt={`${item.imageAlt || ItemTemplate.imageAlt}`}
                                src={`${item.imageUrl || ItemTemplate.imageUrl}`} />
                        </ListItemAvatar>
                        <ListItemText primary={item.title} secondary={item.description} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </ItemBox>
            ))}
        </ListMain>
    )
};

export default List;