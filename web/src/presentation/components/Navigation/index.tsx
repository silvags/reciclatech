import classes from './style.module.scss'
import { AiFillHome } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className={classes.nav_style}>
      <Link href="/">
        <AiFillHome />
      </Link>
      <Link href="/selecionar-tipo">
        <MdLocationOn />
      </Link>
      <Link href="/login">
        <FaUserAlt />
      </Link>
      <Link href="/menu">
        <GiHamburgerMenu />
      </Link>
    </nav>
  )
}