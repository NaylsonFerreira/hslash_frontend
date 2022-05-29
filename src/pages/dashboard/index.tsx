import { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import Input from "../../components/Input";
import { User } from "../../models/user";
import { Categories, Cart, Main, MenuTop } from "./style";

const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        if (users?.length === 0) {
            // userService.getAllUsers().then(setUsers)
        }
    }, [users])

    return (
        <Container>
            <MenuTop>Menu</MenuTop>
            <Main>
                <Categories>
                    Categories
                </Categories>
                <Cart>
                    <Input label="Codigo" />
                    <Input label="Nome" />
                </Cart>
            </Main>
        </Container>
    );
}
export default Dashboard;