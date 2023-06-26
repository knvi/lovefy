// track player
import { Track } from "@/types/spotify";
import { create } from "zustand";

interface ZustandState {
    currentTrack: Track | null;
    setCurrentTrack: (track: Track) => void;
}

export const useStore = create<ZustandState>((set) => ({
    currentTrack: null,
    setCurrentTrack: (track: Track | null) => set({ currentTrack: track }),
}));