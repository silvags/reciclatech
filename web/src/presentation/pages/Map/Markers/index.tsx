import { Marker } from "@react-google-maps/api";
import classes from "./style.module.scss";
import { useEffect, useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillClockCircle, AiFillCloseCircle, AiFillPhone } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import Image from "next/image";

export function Markers({ pev }: { pev: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const getLat = pev.geometry.coordinates[0] as number
  const getLng = pev.geometry.coordinates[1] as number

  useEffect(() => {
    console.log(pev, getLat, getLng, 'pev info')
  }, [])

  return (
    <div>
      <Marker 
        onClick={() => { void setIsOpen(!isOpen) }}
        position={{ lat: getLng, lng: getLat }}
        icon="http://localhost:3001/icon-pev.png"
      />
      {isOpen && (
        <div className={classes.container}>
          <button onClick={() => { void setIsOpen(!isOpen) }}>
            <AiFillCloseCircle />
          </button>
          <Image 
            alt=""
            src="/pev.png" 
            width={100}
            height={100} 
          />
          <h3>{pev.properties.name}</h3>
          <ul>
            <li><MdLocationOn /> {pev.properties.address.street} - {pev.properties.address.neighborhood} - {pev.properties.address.city}/{pev.properties.address.state}</li>
            <li><AiFillClockCircle /> {pev.properties.schedule ?? '-'}</li>
            <li><AiFillPhone /> {pev.properties.contact.phone[0] ?? '-'}</li>
            <li><MdEmail /> {pev.properties.contact.email ?? '-'}</li>
            <li><TbWorldWww /> {pev.properties.contact.website[0] ?? '-'}</li>
          </ul>
        </div>
      )}
    </div>
  )
}