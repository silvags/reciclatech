import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { Title } from "@/presentation/components/Title"
import classes from './style.module.scss'


export function HowToPage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <Container>
        <div className={classes.div_style}>
          <Title style="second">
            Como separar o lixo
          </Title>
          <p>A separação adequada do lixo eletrônico é fundamental para um descarte ambientalmente correto. Siga estas etapas básicas:</p>
          <p><strong>Identificação:</strong> Separe os dispositivos eletrônicos que você deseja descartar, como smartphones, laptops, tablets, cabos, baterias, eletrodomésticos, etc.</p>
          <p><strong>Componentes perigosos:</strong> Dispositivos como baterias, pilhas e lâmpadas fluorescentes contêm substâncias tóxicas. Separe-os dos outros itens e coloque-os em recipientes separados para o descarte apropriado.</p>
          <p><strong>Dados pessoais:</strong> Antes de descartar dispositivos como smartphones ou computadores, certifique-se de apagar todos os dados pessoais e confidenciais. Isso pode envolver a redefinição de fábrica ou a formatação do dispositivo.</p>
          <p><strong>Doações e reuso:</strong> Se os dispositivos ainda estiverem funcionando, considere doá-los ou vendê-los em segunda mão. Isso prolonga a vida útil do dispositivo e reduz a demanda por novos produtos.</p>
          <p><strong>Embalagem:</strong> Guarde os dispositivos eletrônicos em embalagens originais sempre que possível. Isso ajuda a proteger os itens durante o transporte para o local de reciclagem.</p>
          <p><strong>Lixo comum:</strong> Evite colocar dispositivos eletrônicos no lixo comum, pois isso pode resultar na contaminação do meio ambiente devido aos materiais tóxicos e metais presentes.</p>
        </div>
      </Container>
      <Button href="/#">Próximo</Button>
    </section>
  )
}