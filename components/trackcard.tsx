import { Track } from "@/types/spotify";
import { Music } from "lucide-react";
import Image from "next/image";

interface Props {
    tracks: Track[];
}

export default function TrackCard({ tracks }: Props) {
    return (
      <div>
        {tracks?.map((track: Track) => {
          if (!track) {
            return null;
          }   
          return (
              <div className="h-full p-4 transition duration-300 rounded-lg cursor-pointer group/item hover:bg-paper-400 bg-paper-500">
                <div className="relative">
                  {track.album.images.length > 0 ? (
                    <Image
                      src={track.album.images[0].url}
                      alt={track.name}
                      height={160}
                      width={160}
                      className="object-cover w-full rounded-md aspect-square"
                    />
                  ) : (
                    <div className="w-full h-40">
                      <Music className="w-full h-full bg-paper " />
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-bold truncate">{track.name}</h3>
                <h6 className="mt-1 text-xs font-semibold truncate text-gray">
                  {track.artists[0].name}
                </h6>
              </div>
          );
        })}
        </div>
    );
  }
  