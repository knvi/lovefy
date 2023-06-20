import { AuthSession } from "@/types/auth";
import { Track } from "@/types/spotify";
import { get } from "../serverUtils";

export const getRecommendedTracks = async (session: AuthSession): Promise<Track[]> => {
    let endpoint = `https://api.spotify.com/v1/recommendations?limit=10&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_genres=classical,country&seed_artists=4NHQUGzhtTLFvgF5SZesLK&market=PL`;

    const data = await get(endpoint, session);

    console.log(data.tracks)

    return data.tracks;
}