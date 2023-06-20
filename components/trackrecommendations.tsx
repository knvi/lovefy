import { getRecommendedTracks } from "@/lib/spotify/getrecommended";
import { getAuthSession } from "@/lib/serverUtils";
import TrackCard from "./trackcard";

export default async function TrackRecommendations() {
  const session = await getAuthSession();
  if (!session) {
    return null;
  }

  const recommendations = await getRecommendedTracks(session);

  return (
    <div className="mt-16">
      <h1>Recommendations</h1>
      <TrackCard tracks={recommendations} />
    </div>
  );
}