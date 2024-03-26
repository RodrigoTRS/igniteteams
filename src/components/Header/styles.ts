import styled from "styled-components/native"
import { View, Image } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';

interface ContainerProps {
    showBackButton: boolean
}

export const Container = styled.View<ContainerProps>`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.showBackButton ? "space-between" : "center"};
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`

export const BackButton = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 36,
    color: theme.COLORS.WHITE
}))`
`
