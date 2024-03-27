import { Container, Content, Icon } from './styles';
import { Header } from '../../components/Header/index';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup(){ 
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
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 24 }}
                />
            </Content>
        </Container>
    )
}