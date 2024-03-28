import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { AppError } from "@utils/AppError";
import { Player } from "./PlayerDTO";
import { fetchPlayersByGroup } from "./fetch-players-by-group";


export async function createPlayerByGroup(newPlayer: Player, group: string) {
    try {
        const currentPlayersArray = await fetchPlayersByGroup(group)

        const isPlayerAlreadyOnGroup = currentPlayersArray.find(player => player.name === newPlayer.name)
        if (isPlayerAlreadyOnGroup) {
            throw new AppError("Jogador já está no grupo.")
        }

        const newPlayersArray = JSON.stringify([...currentPlayersArray, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newPlayersArray)

    } catch (err) {
        throw err
    }
}