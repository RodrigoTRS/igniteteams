import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { fetchGroups } from "./fetch-groups";
import { AppError } from "@utils/AppError";

export async function createGroup(newGroup: string) {
    try {
        const currentGroupsArray = await fetchGroups()

        const groupAlreadyExists = currentGroupsArray.includes(newGroup)

        if (groupAlreadyExists) {
            throw new AppError("Grupo já existe.")
        }

        const newGroupsArray = JSON.stringify([...currentGroupsArray, newGroup])
        await AsyncStorage.setItem(GROUP_COLLECTION, newGroupsArray)
    } catch (err) {
        throw err
    }
}