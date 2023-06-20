"use client"

import Card from "@/components/card";
import { useEffect, useState } from "react";
import { SwipeType } from "@/types/card";
import { Track } from "@/types/spotify";
import { AnimatePresence } from "framer-motion";
import { getRecommendedTracks } from "@/lib/spotify/getrecommended";
import { AuthSession } from "@/types/auth";

type Props = {
  session: AuthSession;
};

export default function CardHolder({ session }: Props) {
  const [cards, setCards] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const remove = (old: Track, swipe: SwipeType) => {
    setCards((prevCards) => prevCards.filter((card) => card !== old));
  };

  const getCards = async () => {
    setIsLoading(true);
    const res = await getRecommendedTracks(session);
    setCards(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getCards();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen gradient">
        <span className="text-white text-xl">
          please wait for a while.... refilling cards pool
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gradient">
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            active={index === cards.length - 1}
            track={card}
            remove={remove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}