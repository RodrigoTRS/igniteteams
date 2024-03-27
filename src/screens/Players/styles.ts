import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_600};
    padding: 24px;
`

export const Form = styled.View`
    width: 100%;
    background-color: ${props => props.theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    border-radius: 5px;
`

export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    margin: 32px 0 12px;
`
export const NumberOfPlayers = styled.Text`
  ${( props ) => css`
    color: ${props.theme.COLORS.GRAY_200};
    font-family: ${props.theme.FONT_FAMILY.BOLD};
    font-size: ${props.theme.FONT_SIZE.SM}px;
  `};
`;
