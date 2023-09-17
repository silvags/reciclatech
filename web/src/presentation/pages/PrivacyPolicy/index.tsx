import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import classes from "./style.module.scss"
import { Button } from "@/presentation/components/Button"
import { useRouter } from "next/navigation"

export function PrivacyPolicyPage() {
  const router = useRouter()

  return (
    <section className={classes.section_style}>
      <Logo/>
      <Container>
        <div className={classes.div_style}>
          <p>Política de Segurança e Privacidade do Aplicativo <strong>ReciclaTech</strong></p>
          <p>
            <strong>1. Introdução</strong>
            <br />
            A Política de Segurança e Privacidade do Aplicativo ReciclaTech tem como objetivo esclarecer como coletamos, utilizamos, protegemos e compartilhamos informações dos usuários do aplicativo. Esta política se aplica a todas as informações coletadas pelo aplicativo ReciclaTech, incluindo dados pessoais e informações relacionadas à reciclagem de lixo.
          </p>
          <p>
            <strong>2. Coleta e Uso de Informações</strong>
            <br />
            <b>2.1</b> Informações de Cadastro: Para utilizar os recursos do aplicativo ReciclaTech, solicitamos que o usuário forneça informações pessoais, como nome, endereço de e-mail e localização. Essas informações são usadas para criar uma conta, fornecer suporte ao usuário e personalizar a experiência.
            <br />
            <b>2.2</b> Informações de Reciclagem: O aplicativo permite ao usuário registrar suas atividades de reciclagem, incluindo tipos de resíduos reciclados e quantidades. Esses dados são utilizados para fornecer estatísticas pessoais, metas de reciclagem e insights relacionados à sustentabilidade.
            <br />
            <b>2.3</b> Informações de Uso: Coletamos informações sobre como o usuário interage com o aplicativo, como páginas visitadas, funcionalidades utilizadas e tempos de uso. Esses dados nos ajudam a melhorar a usabilidade do aplicativo e a personalizar a experiência.
          </p>
          <p>
            <strong>3. Compartilhamento de Informações</strong>
            <br />
            <b>3.1</b> Compartilhamento Interno: As informações coletadas podem ser compartilhadas internamente dentro da equipe ReciclaTech para melhorar os serviços e funcionalidades do aplicativo.
            <br />
            <b>3.2</b> Parceiros e Fornecedores: Em alguns casos, podemos compartilhar informações com parceiros e fornecedores para melhorar a qualidade do serviço ou fornecer recursos adicionais. Esses terceiros são obrigados a manter a confidencialidade das informações.
            <br />
            <b>3.3</b> Requisitos Legais: Podemos divulgar informações pessoais se exigido por lei, regulamentação ou processo legal.
          </p>
          <p>
            <strong>4. Segurança</strong>
            <br />
            <b>4.1</b> Proteção de Dados: Implementamos medidas de segurança técnicas e organizacionais para proteger as informações dos usuários contra acesso não autorizado, divulgação ou modificação.
            <br />
            <b>4.2</b> Acesso Restrito: Apenas funcionários autorizados têm acesso às informações pessoais dos usuários, e esse acesso é limitado ao que é estritamente necessário para a execução de suas funções.
            <br />
            <b>4.3</b> Criptografia: Utilizamos criptografia para proteger as informações durante a transmissão e armazenamento.
          </p>
          <p>
            <strong>5. Direitos do Usuário</strong>
            <br />
            <b>5.1</b> Acesso e Correção: Os usuários têm o direito de acessar e corrigir suas informações pessoais a qualquer momento.
            <br />
            <b>5.2</b> Exclusão de Conta: Os usuários podem solicitar a exclusão de suas contas e informações pessoais a qualquer momento.
          </p>
          <p>
            <strong>6. Alterações na Política</strong>
            <br />
            Atualizações: Podemos atualizar esta política periodicamente para refletir mudanças nas práticas de privacidade e segurança. As versões atualizadas serão publicadas no aplicativo.
          </p>
          <p>
            <strong>7. Contato</strong>
            <br />
            Em caso de dúvidas, preocupações ou solicitações relacionadas à privacidade e segurança, os usuários podem entrar em contato conosco por meio das informações de contato fornecidas no aplicativo.
            Ao utilizar o aplicativo ReciclaTech, o usuário concorda com os termos desta Política de Segurança e Privacidade. Esta política busca garantir a proteção das informações dos usuários e promover uma experiência confiável e segura no uso do aplicativo.
          </p>
        </div>
      </Container>
      <Button asChild>
        <button onClick={() => router.back()}>Voltar</button>
      </Button>
    </section>
  )
}