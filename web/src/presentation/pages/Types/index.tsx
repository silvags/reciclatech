import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { Title } from "@/presentation/components/Title"
import Link from "next/link"
import classes from './style.module.scss'

export function TypesPage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <Container>
        <div className={classes.div_style}>
          <Link href="/lixo-eletronico">
            <Title style="first">
              Lixo eletrônico
            </Title>
          </Link>
          <Link href="/lixo-reciclavel">
            <Title style="first">
              Lixo reciclável
            </Title>
          </Link>
          <Link href="/como-separar">
            <Title style="first">
              Como separar o lixo
            </Title>
          </Link>
        </div>
      </Container>
      <Button href="/selecionar-tipo">Próximo</Button>
    </section>
  )
}