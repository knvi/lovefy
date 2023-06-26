import CardHolder from "@/components/cardholder"
import { getAuthSession } from "@/lib/serverUtils";
import { redirect } from "next/navigation";

export default async function IndexPage() {
  const session = await getAuthSession();
  if (!session) {
    redirect("auth/signin");
  }

  return (
    <CardHolder session={session} />
  )
}
