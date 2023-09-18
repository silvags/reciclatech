import { Logo } from "@/presentation/components/Logo"
import classes from "./style.module.scss"
import { Button } from "@/presentation/components/Button"
import { Input } from "@/presentation/components/Input"
import { MdAlternateEmail, MdLibraryBooks } from "react-icons/md"
import { FaCaretRight, FaRecycle, FaShare, FaTruckMoving } from "react-icons/fa"
import { BsFillGearFill } from "react-icons/bs"
import Link from "next/link"
import { AiOutlineInfoCircle, AiOutlineQuestionCircle } from "react-icons/ai"
import { TbWorld } from "react-icons/tb"

export function MenuPage() {
  return (
    <section className={classes.section_style}>
      <ul>
        <li>
          <FaRecycle />
          <Link href="/tipos-lixo">
            Tipos de resíduos e separação
          </Link>
          <span><FaCaretRight /></span>
        </li>
        <li><FaTruckMoving /> Agendar coleta <span><FaCaretRight /></span></li>
        <li><MdLibraryBooks /> Curiosidades sobre o meio ambiente <span><FaCaretRight /></span></li>
        <span className={classes.divisor}></span>
        <li><FaShare /> Compartilhar ReciclaTech <span><FaCaretRight /></span></li>
        <li><AiOutlineInfoCircle /> Sobre <span><FaCaretRight /></span></li>
        <li><TbWorld /> Idioma <span><FaCaretRight /></span></li>
        <li><AiOutlineQuestionCircle /> Ajuda <span><FaCaretRight /></span></li>
        <li><BsFillGearFill /> Configurações <span><FaCaretRight /></span></li>
      </ul>
    </section>
  )
}