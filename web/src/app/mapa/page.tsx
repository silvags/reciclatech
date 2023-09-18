'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { MapPage } from "@/presentation/pages/Map";

export default function Mapa() {
  return (
    <>
      <main>
        <MapPage />
      </main>
      <Navigation />
    </>
  )
}
