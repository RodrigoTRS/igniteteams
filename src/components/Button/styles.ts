import { TouchableOpacity } from "react-native"
import styled, {css} from "styled-components/native"


export interface ButtonStyleProps {
    destructive: boolean
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, destructive }) => destructive ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({ theme }) => `
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`