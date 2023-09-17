'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { RecyclablePage } from "@/presentation/pages/Recyclable";

export default function Recyclable() {
  return (
    <>
      <main>
        <RecyclablePage />
      </main>
      <Navigation />
    </>
  )
}
