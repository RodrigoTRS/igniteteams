import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    destructive?: boolean
}

export function Button({ title, destructive = false, ...props }: ButtonProps) {

    return (
        <Container destructive={destructive} {...props}>
            <Title>{ title }</Title>
        </Container>
    )
}