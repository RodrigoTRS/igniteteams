import { Container, Content, Icon } from './styles';
import { Header } from '../../components/Header/index';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createGroup } from '@storage/group/create-group';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup(){ 
    const [group, setGroup] = useState("")

    const navigation = useNavigation()

    async function handleCreateNewGroup() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert("Novo Grupo", "Informe o nome da turma")
            }
            await createGroup(group)
            navigation.navigate("players", { group })
        } catch(err) {
            if(err instanceof AppError) {
                Alert.alert("Novo Grupo", err.message)
            } else {
                Alert.alert("Novo Grupo", "Não foi possível criar um grupo.")
                console.error(err)
            }
        }
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