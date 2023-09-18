'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { MenuPage } from "@/presentation/pages/Menu";

export default function Menu() {
  return (
    <>
      <main>
        <MenuPage />
      </main>
      <Navigation />
    </>
  )
}
