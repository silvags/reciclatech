'use client'

import { Navigation } from "@/presentation/components/Navigation";
import { SelectTypePage } from "@/presentation/pages/SelectType";

export default function SelectType() {
  return (
    <>
      <main>
        <SelectTypePage />
      </main>
      <Navigation />
    </>
  )
}
