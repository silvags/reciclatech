'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { MapPage } from "@/presentation/pages/Map";

export default function Recyclable() {
  return (
    <>
      <main>
        <MapPage />
      </main>
      <Navigation />
    </>
  )
}
