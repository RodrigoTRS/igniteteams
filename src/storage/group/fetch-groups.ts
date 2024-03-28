import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";

export async function fetchGroups() {
    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
        
        const groups: string[] = storage ? JSON.parse(storage) : []

        return groups
    } catch (err) {
        throw err
    }
}