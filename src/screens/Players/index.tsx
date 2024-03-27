import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/FIlter";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

interface PlayersRouteParams {
    group: string
}

export function Players() {
    const [teamFilter, setTeamFIlter] = useState("Time A")
    const [players, setPlayers] = useState(["Test"])
    const [addPlayerValue, setAddPlayerValue] = useState("")

    const route = useRoute()
    const { group } = route.params as PlayersRouteParams

    function handleAddPlayer() {
        setPlayers(state => [...state, addPlayerValue])
    }

    function handleRemovePlayer(name: string) {
        setPlayers(state => state.filter((player) => player !== name))
    }

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome do player"
                    autoCorrect={false}
                    onChangeText={setAddPlayerValue}
                    value={addPlayerValue}
                />
                <ButtonIcon
                    onPress={handleAddPlayer}
                    icon="add"
                />
            </Form>
            <HeaderList>

                <FlatList
                    data={["Time A", "Time B", "Time C", "Time D", "Time E"]}
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
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => handleRemovePlayer(item)}
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
            <Button
                title="Remover turma"
                destructive
            />
        </Container>
    )
}