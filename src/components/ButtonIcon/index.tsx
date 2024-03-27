import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"

interface ButtonIconProps extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap;
    destructive?: boolean
}

export function ButtonIcon({icon, destructive = false, ...props}: ButtonIconProps) {
    return (
        <Container {...props}>
            <Icon
                name={icon}
                destructive={destructive}
            />
        </Container>
    )
}