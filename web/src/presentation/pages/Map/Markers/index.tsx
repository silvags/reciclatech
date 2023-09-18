import { Marker } from "@react-google-maps/api";
import * as Popover from '@radix-ui/react-popover';
import classes from "./style.module.scss"
import { useEffect, useState } from "react";
import { MdLocationOn, MdLocationPin } from "react-icons/md";
import { AiFillClockCircle, AiFillCloseCircle, AiFillPhone } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

import IMG from '../../../../../public/favicon.png'

export function Markers() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    console.log(isOpen, 'open')
  }, [isOpen])

  return (
    <div>
      <Marker 
        onClick={() => { void setIsOpen(!isOpen) }}
        position={{ lat: -23.5489, lng: -46.6388 }}
      />
      {isOpen && (
        <div className={classes.container}>
          <button onClick={() => { void setIsOpen(!isOpen) }}>
            <AiFillCloseCircle />
          </button>
          <h3>Recicla SPA</h3>
          <ul>
            <li><MdLocationOn /> Rua blablabla blabla</li>
            <li><AiFillClockCircle /> Horário 9h às 14h</li>
            <li><AiFillPhone /> (11) 8888-8888</li>
            <li><TbWorldWww /> www.site.com</li>
          </ul>
        </div>
      )}
    </div>
  )
}