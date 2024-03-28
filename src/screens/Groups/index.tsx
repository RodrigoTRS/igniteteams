import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Container } from './styles';
import { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { fetchGroups } from '@storage/group/fetch-groups';
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate("newGroup");
  }

  async function loadGroups() {
    try {
      setIsLoading(true)
      const data = await fetchGroups()
      setGroups(data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  function handleNavigateToGroup(name: string) {
    navigation.navigate("players", { group: name })
  }

  useFocusEffect(useCallback(() => {
    loadGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      { isLoading
        ? <Loading />
        : (
        <FlatList
          data={groups}
          keyExtractor={group => group}
          renderItem={(group) => {
            return (
            <GroupCard title={group.item} onPress={() => handleNavigateToGroup(group.item)}/>
          )}}
          contentContainerStyle={[
            { paddingBottom: 100},
            groups.length === 0 && { flex: 1 }
          ]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList message="Nenhuma turma cadastrada." />}
        />
        )}
      <Button
        onPress={handleNewGroup}
        title="Adicionar nova turma"
      />
    </Container>
  );
}
