import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Card from "@/components/card"
import { useEffect, useState } from "react";
import { SwipeType } from "@/types/card"
import { AnimatePresence } from "framer-motion"
import { useSession } from "next-auth/react"
import CardHolder from "@/components/cardholder"
import { redirect } from "next/navigation";
import { Track } from "@/types/spotify";
import TrackRecommendations from "@/components/trackrecommendations";
import { getAuthSession } from "@/lib/serverUtils";

export default async function IndexPage() {
  const session = await getAuthSession();
  if (!session) {
    return null;
  }

  return (
    <CardHolder session={session} />
  )
}
