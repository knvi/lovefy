import { Track } from "./spotify";

export type SwipeType = "yay" | "nay";

export interface CardProps {
    active: boolean; // if the card is swipeable
    remove: (old: Track, swipe: SwipeType) => void; // function to remove the card after swipe
    track: Track;
}