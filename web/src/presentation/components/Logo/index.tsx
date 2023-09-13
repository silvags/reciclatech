import Image from "next/image";
import classes from './style.module.scss'

export function Logo() {
  return (
    <div className={classes.div_style}>
      <Image
        alt='Reciclatech'
        src='/logo.png'
        width={155}
        height={50}
      />
    </div>
  )
}