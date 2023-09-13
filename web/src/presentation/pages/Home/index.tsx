import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import classes from './style.module.scss'

export function HomePage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <Container>
        <div>
          <p>Bem-vindo ao <strong>Recicla Tech</strong>!</p>
          <p className={classes.paragraph_style}>Aqui sua contribuição faz a diferença no cuidado com o meio ambiente. </p>
          <p>Junte-se a nós para criar um futuro mais sustentável, onde cada dispositivo eletrônico descartado corretamente se transforma em uma oportunidade de preservar recursos preciosos e reduzir impactos nocivos.</p>
          <p className={classes.paragraph_style}>Explore nosso guia de reciclagem, encontre pontos de coleta próximos a você e acompanhe seu progresso na jornada rumo a um planeta mais limpo.</p>
          <p>Cada ação conta! Juntos, estamos construindo um amanhã mais verde e consciente.</p>
        </div>
      </Container>
      <Button href="/tipos-lixo">Começar</Button>
    </section>
  )
}