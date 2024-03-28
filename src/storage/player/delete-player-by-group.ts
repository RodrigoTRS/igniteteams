import AsyncStorage from "@react-native-async-storage/async-storage"
import { fetchPlayersByGroup } from "./fetch-players-by-group"
import { PLAYER_COLLECTION } from "@storage/storage-config"

export async function deletePlayerByGroup(playerName: string, group: string) {
    try {
        const storage = await fetchPlayersByGroup(group)
        const filteredStorage = storage.filter(player => player.name !== playerName)
        const players = JSON.stringify(filteredStorage)
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
    } catch(err) {
        throw err
    }
}