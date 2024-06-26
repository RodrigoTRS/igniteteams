import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { Player } from "./PlayerDTO";


export async function fetchPlayersByGroup(group: string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

        const players: Player[] = storage ? JSON.parse(storage) : []

        return players

    } catch (err) {
        throw err
    }
}