import { fetchPlayersByGroup } from "./fetch-players-by-group"

export async function fetchPlayersByGroupAndTeam(group: string, team: string) {
    try {
        const storage = await fetchPlayersByGroup(group);
        const players = storage.filter(player => player.team === team)
        return players
    } catch(err) {
        throw err
    }
}