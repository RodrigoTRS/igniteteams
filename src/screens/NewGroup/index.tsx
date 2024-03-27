import { Container, Content, Icon } from './styles';
import { Header } from '../../components/Header/index';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function NewGroup(){ 
    const [group, setGroup] = useState("")

    const navigation = useNavigation()

    function handleCreateNewGroup() {
        navigation.navigate("players", { group })
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie a turma para adicionar pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                    value={group}
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 24 }}
                    onPress={handleCreateNewGroup}
                />
            </Content>
        </Container>
    )
}