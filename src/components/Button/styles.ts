import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"


export interface ButtonStyleProps {
    variant: boolean
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, variant }) => variant ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE.MD}px;
    color: ${props => props.theme.COLORS.WHITE};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`