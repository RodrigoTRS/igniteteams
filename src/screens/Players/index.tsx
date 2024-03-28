import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/FIlter";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

import { Player } from "@storage/player/PlayerDTO";
import { createPlayerByGroup } from "@storage/player/create-player-by-group";
import { fetchPlayersByGroupAndTeam } from "@storage/player/fetch-players-by-group-and-teams";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { deletePlayerByGroup } from "@storage/player/delete-player-by-group";
import { deleteGroupByName } from "@storage/group/delete-group-by-name";
import { Loading } from "@components/Loading";

interface PlayersRouteParams {
    group: string
}

export function Players() {
    const [players, setPlayers] = useState<Player[]>([])
    const [teamFilter, setTeamFIlter] = useState("Time A")
    const [addPlayerValue, setAddPlayerValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const newPlayerInputRef = useRef<TextInput>(null)

    const navigation = useNavigation()
    const route = useRoute()
    const { group } = route.params as PlayersRouteParams

    async function handleAddPlayer() {
        if (addPlayerValue.trim().length === 0) {
            return Alert.alert("Novo jogador", "Informe o nome do jogador.")
        }

        const newPlayer: Player = {
            name: addPlayerValue,
            team: teamFilter,
        }

        try {
            await createPlayerByGroup(newPlayer, group);
            newPlayerInputRef.current?.blur()
            setAddPlayerValue("")
            loadPlayersByTeam()
        } catch(err) {
            if (err instanceof AppError) {
                Alert.alert("Novo jogador", err.message)
            } else {
                console.error(err)
                Alert.alert("Novo jogador", "Não foi possível adicionar um novo jogador.")
            }
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            await deletePlayerByGroup(playerName, group)
            loadPlayersByTeam()
        } catch(err) {
            console.error(err)
            Alert.alert("Remover Jogador", "Não foi possível remover esse jogador.")
        }
    }

    async function groupRemove() {
        try {
            await deleteGroupByName(group)
            navigation.navigate("groups")
        } catch(err) {
            console.error(err)
            Alert.alert("Deletar Turma", "Não foi possível deletar a turma.")
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            "Deletar Turma",
            `Deseja remover a turma ${group}?`,
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => groupRemove() }
            ]
        )
    }

    async function loadPlayersByTeam() {
        try {
            setIsLoading(true)
            const players = await fetchPlayersByGroupAndTeam(group, teamFilter)
            setPlayers(players)
        } catch(err) {
            console.error(err)
            Alert.alert("Jogadores", "Não foi possível carregar os jogadores.")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadPlayersByTeam()
    }, [teamFilter])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input
                    inputRef={newPlayerInputRef}
                    placeholder="Nome do player"
                    autoCorrect={false}
                    onChangeText={setAddPlayerValue}
                    value={addPlayerValue}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon
                    onPress={handleAddPlayer}
                    icon="add"
                />
            </Form>
            <HeaderList>
                <FlatList
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item}
                            isActive={item === teamFilter}
                            onPress={() => setTeamFIlter(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            {isLoading
            ? <Loading />
            : (<FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />
                )}
                ListEmptyComponent={() => {
                    return (
                        <EmptyList
                            message="Não há pessoas nesse time"
                        />
                    )
                }}
                contentContainerStyle={[
                    { paddingBottom: 100},
                    players.length === 0 && { flex: 1 }
                ]}
            />
            )}
            <Button
                title="Remover turma"
                onPress={handleRemoveGroup}
                destructive
            />
        </Container>
    )
}