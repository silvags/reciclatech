'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { HomePage } from "@/presentation/pages/Home";

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
      </main>
      <Navigation />
    </>
  )
}
