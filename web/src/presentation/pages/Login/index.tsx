import { Logo } from "@/presentation/components/Logo"
import classes from "./style.module.scss"
import { Button } from "@/presentation/components/Button"
import { Input } from "@/presentation/components/Input"
import { MdAlternateEmail } from "react-icons/md"
import { FaLock } from "react-icons/fa"
import Link from "next/link"

export function LoginPage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <form>
        <p>E-mail</p>
        <Input
          icon={(<MdAlternateEmail />)}
          placeholder="E-mail"
        />
        <p>Senha</p>
        <Input
          icon={(<FaLock />)}
          placeholder="Senha"
        />
        <Link href="#">
          Esqueceu a senha?
        </Link>
        <Button
          css={{ width: '100%'}}
          asChild
        >
          <button>Login</button>
        </Button>
      </form>
      <Button
        css={{ width: '100%'}}
        href="/cadastro"
      >
        Cadastrar
      </Button>
    </section>
  )
}