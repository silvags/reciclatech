import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { Title } from "@/presentation/components/Title"
import classes from './style.module.scss'

export function RecyclablePage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <Container>
        <div className={classes.div_style}>
          <Title style="second">
            Lixo reciclável
          </Title>
          <p>Lixo reciclável são materiais descartados que podem ser coletados, processados e transformados em novos produtos, contribuindo para a redução do desperdício e a preservação do meio ambiente. Existem vários tipos de lixo reciclável, incluindo:</p>
          <p><strong>Papel e Papelão:</strong> <br /> Jornais, revistas, caixas de papelão, embalagens de papel, papel de escritório etc.</p>
          <p><strong>Plástico:</strong> <br /> Garrafas de água, embalagens de alimentos, potes, recipientes, sacolas plásticas (verificar o tipo de plástico para reciclagem adequada).</p>
          <p><strong>Vidro:</strong> <br /> Garrafas, potes e recipientes de vidro de diferentes cores.</p>
          <p><strong>Metal:</strong> <br /> Latas de alumínio, latas de aço, embalagens de metal.</p>
          <p><strong>Tecidos e Têxteis:</strong> <br /> Roupas, tecidos de casa, calçados (em algumas regiões).</p>
          <p><strong>Eletrônicos:</strong> <br /> Equipamentos eletrônicos como celulares, computadores, TVs e outros dispositivos eletrônicos.</p>
          <p><strong>Materiais Orgânicos:</strong> <br /> Restos de comida e resíduos de jardim podem ser compostados para fertilizantes.</p>
          <p><strong>Embalagens Tetra Pak:</strong> <br /> Caixas de leite e suco compostas por papel, plástico e alumínio.</p>
          <p><strong>Materiais de Construção:</strong> <br /> Alguns materiais como vidro e metais de construções podem ser reciclados.</p>
          <p>É importante verificar as diretrizes de reciclagem da sua região, pois a aceitação de certos materiais pode variar. Separar adequadamente esses tipos de lixo ajuda a facilitar o processo de reciclagem e a minimizar o impacto ambiental.</p>
        </div>
      </Container>
      <Button href="/#">Próximo</Button>
    </section>
  )
}