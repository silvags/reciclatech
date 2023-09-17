import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { Title } from "@/presentation/components/Title"
import { useRouter } from "next/navigation"
import classes from "./style.module.scss"

export function ElectronicPage() {
  const router = useRouter()

  return (
    <section className={classes.section_style}>
      <Logo />
      <Container>
        <div className={classes.div_style}>
          <Title style="second">
            Lixo eletrônico
          </Title>
          <p>O lixo eletrônico, também conhecido como e-lixo ou resíduos de equipamentos elétricos e eletrônicos (REEE), abrange uma variedade de dispositivos descartados que contêm componentes eletrônicos e elétricos. Esses resíduos são caracterizados por seu potencial impacto ambiental devido à presença de substâncias tóxicas e metais pesados. Existem diversos tipos de lixo eletrônico, incluindo:</p>
          <p><strong>1. Equipamentos de Consumo:</strong> <br /> Isso engloba dispositivos que as pessoas usam em suas vidas diárias, como computadores, laptops, smartphones, tablets, câmeras, eletrodomésticos, televisores e aparelhos de som.</p>
          <p><strong>2. Equipamentos de Tecnologia da Informação (TI):</strong> <br /> São dispositivos mais específicos utilizados em ambientes de escritório, como servidores, roteadores, impressoras, scanners e outros periféricos.</p>
          <p><strong>3. Dispositivos de Entretenimento:</strong> <br /> Incluem consoles de jogos, tocadores de música e vídeo, e outros dispositivos voltados para o entretenimento, muitos dos quais são atualizados frequentemente, levando ao descarte constante.</p>
          <p><strong>4. Equipamentos Médicos:</strong> <br /> Dispositivos médicos eletrônicos, como equipamentos de diagnóstico, monitores, dispositivos de imagem e equipamentos de tratamento, também contribuem para o lixo eletrônico.</p>
          <p><strong>5. Equipamentos de Iluminação:</strong> <br /> Lâmpadas fluorescentes, lâmpadas de LED e outras formas de iluminação eletrônica contêm componentes que necessitam de descarte apropriado.</p>
          <p><strong>6. Baterias e Pilhas:</strong> <br /> As baterias recarregáveis de dispositivos eletrônicos e as pilhas de botão contêm metais pesados, como lítio, chumbo e mercúrio, que podem ser prejudiciais ao meio ambiente se não forem tratados corretamente.</p>
          <p><strong>7. Cabos e Fios:</strong> <br /> Fios de energia, cabos de comunicação e cabos de conexão também fazem parte do lixo eletrônico, uma vez que possuem revestimentos e isolantes que podem ser prejudiciais.</p>
        </div>
      </Container>
      <Button asChild>
        <button onClick={() => router.back()}>
          Voltar
        </button>
      </Button>
    </section>
  )
}