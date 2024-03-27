import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface FilterStyleProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${( props ) => props.isActive && css`
    border: 2px solid ${props.theme.COLORS.GREEN_700};
    `};

    background-color: ${(props) => props.theme.COLORS.GRAY_700};

  border-radius: 4px;
  margin-right: 12px;
  
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  
  ${( props ) => css`
    font-family: ${props.theme.FONT_FAMILY.BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
    color: ${props.theme.COLORS.WHITE};
  `};
`