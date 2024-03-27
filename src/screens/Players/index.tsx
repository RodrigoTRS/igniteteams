import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/FIlter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Text } from "react-native";
import { Button } from "@components/Button";

export function Players() {
    const [teamFilter, setTeamFIlter] = useState("Time A")
    const [players, setPlayers] = useState(["Test"])
    const [addPlayerValue, setAddPlayerValue] = useState("")

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
                title="Nome da Turma"
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