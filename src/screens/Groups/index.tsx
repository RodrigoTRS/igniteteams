import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={group => group}
        renderItem={(group) => {
          return (
          <GroupCard title={group.item} />
        )}}
        contentContainerStyle={groups.length === 0 && { flex: 1}}
        ListEmptyComponent={<EmptyList message="Nenhuma turma cadastrada." />}
      />
      <Button
        onPress={handleNewGroup}
        title="Adicionar nova turma"
      />
    </Container>
  );
}
