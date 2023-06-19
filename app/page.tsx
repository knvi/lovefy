"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Card from "@/components/card"
import { useEffect, useState } from "react";
import { CardType, SwipeType } from "@/types/card"
import { AnimatePresence } from "framer-motion"

const CARDS = [
  { id: 0, name: "yay", color: "#E42100" },
  { id: 1, name: "development", color: "#F36000" },
  { id: 2, name: "web", color: "#F3BC00" },
  { id: 3, name: "enjoy", color: "#A0A226" },
  { id: 4, name: "to", color: "#349B19" },
  { id: 5, name: "seem", color: "#70BBFF" },
  { id: 6, name: "actually", color: "#7F4877" },
  { id: 7, name: "i", color: "#BC2A6E" },
];

export default function IndexPage() {
  const [cards, setCards] = useState(CARDS);
  const activeIndex = cards.length - 1;

  const remove = (old: CardType, swipe: SwipeType) => {
    setCards(cards.filter(card => card !== old));
  }

  useEffect(() => {
    if (cards.length === 0) {
      setTimeout(() => {
        setCards(CARDS);
      }
      , 1000);
    }
  }, [cards]);

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen gradient">
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card key={card.id} active={index === activeIndex} card={card} remove={remove} />
        ))}
      </AnimatePresence>
      {cards.length === 0 ? (
        <span className="text-white text-xl">please wait for a while.... refilling cards pool</span>
      ) : null}
    </div>
  )
}
