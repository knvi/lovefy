export type CardType = {
    id: number;
    name: string;
    color: string;
}

export type SwipeType = "yay" | "nay";

export interface CardProps {
    card: CardType; // CardType
    active: boolean; // if the card is swipeable
    remove: (old: CardType, swipe: SwipeType) => void; // function to remove the card after swipe
}