import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchGroups } from "./fetch-groups"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storage-config";

export async function deleteGroupByName(groupName: string) {
    try {
        const groupStorage = await fetchGroups();
        const groups = groupStorage.filter(group => group !== groupName)
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
    } catch(err) {
        throw err
    }
}