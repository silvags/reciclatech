import { Marker } from "@react-google-maps/api";
import * as Popover from '@radix-ui/react-popover';
import classes from "./style.module.scss"
import { useState } from "react";

export function Markers() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => { void setOpen(true) }}>
        <Marker 
          position={{ lat: -23.5489, lng: -46.6388 }} 
        />
      </button>
    </div>
  )
}