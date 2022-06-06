import { BaseTextFieldProps, TextField } from "@mui/material";

interface Props extends BaseTextFieldProps {
    onChange: (id: string) => void
}

export const Input = ({
    className = "fluid",
    variant = "outlined",
    onChange,
    ...props
}: Props) => {

    return (
        <TextField
            className={className}
            variant={variant}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    );
};

export default Input;