import { Main } from "./style";

type Props = {
    type?: string;
    label: string,
    defaultValue?: string,
    onChange?: (value: string | number) => void,
}

export const Input = ({
    label = '',
    defaultValue = '',
    type = "text",
    onChange = (value) => console.log(value)
}: Props) => {
    return (
        <Main>
            {label != '' && (<label>{label}</label>)}
            <input
                type={type}
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
            />
        </Main>
    );
};

export default Input;