import { UsersThree } from 'phosphor-react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_600};
    padding: 25px;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`

export const Icon = styled(UsersThree).attrs((props) => ({
    size: 56,
    color: props.theme.COLORS.GREEN_700
}))`
    align-self: center
`