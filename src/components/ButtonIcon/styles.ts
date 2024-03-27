import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export interface ButtonIconStyleProps {
    destructive: boolean
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>((props) => ({
    size: 24,
    color: props.destructive ? props.theme.COLORS.RED: props.theme.COLORS.GREEN_700 
}))``;