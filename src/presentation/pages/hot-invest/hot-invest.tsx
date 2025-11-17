import { Meta, CTA, CreditCard, FAQ, InvestmentsHeader, PricingTable, Stats, BenefitsInvest, CTACards } from 'src/presentation/components'

const HotInvest = () => (
  <div>
    <Meta
      title="Hot Invest | Oportunidades de investimento"
      description="Explore oportunidades com a Confia Capital."
      keywords="investimentos, oportunidades, confia capital"
      image="http://confiacapital.com.br/og-hot-invest.png"
    />
    <InvestmentsHeader />
    <Stats
      title="Por que milhões de pessoas escolhem o HotInvest"
      stats={[
        {
          value: 1000000,
          suffix: "+",
          label: "clientes ativos",
          duration: 3.0
        },
        {
          value: 0,
          prefix: "R$ ",
          suffix: "",
          label: "taxa de manutenção",
          duration: 1.5
        },
        {
          value: 150,
          suffix: "%",
          label: "rendimento acima da poupança",
          duration: 2.5
        },
        {
          value: 24,
          suffix: "h",
          label: "atendimento disponível",
          duration: 2.0
        }
      ]}
    />
    <BenefitsInvest />
    <CreditCard title="Investir com profundidade e segurança" subtitle="HOT INVEST" />
    <PricingTable />
    <CTACards />
    <FAQ
      title="Perguntas frequentes"
      themeColor="#16487E"
      items={[
        { id: 'q1', question: 'O Hot Invest cobra taxas de abertura ou manutenção?', answer: 'Não. A plataforma segue o modelo de banco digital sem tarifas de abertura e sem mensalidade, com transparência total em eventuais custos de operações específicas.' },
        { id: 'q2', question: 'Como o Hot Invest garante segurança e conformidade?', answer: 'Seguimos práticas de proteção de dados, criptografia e conformidade regulatória, com governança e compliance aplicados em todas as operações. Você acompanha tudo pelo app com autenticação forte.' },
        { id: 'q3', question: 'Meu saldo rende automaticamente? Em qual referência?', answer: 'Sim. O saldo rende acima da poupança de forma automática, sem burocracia. Você visualiza o rendimento direto no aplicativo.' },
        { id: 'q4', question: 'Quem pode investir nas oportunidades do Hot Invest?', answer: 'Investidores qualificados ou profissionais, pessoa física ou jurídica, conforme o perfil de risco e o enquadramento regulatório de cada operação.' },
        { id: 'q5', question: 'Quais produtos e operações estão disponíveis?', answer: 'Acesso a conta digital, cartão, transferências gratuitas, além de operações de investimentos e estruturadas com documentação padronizada e curadoria técnica.' },
        { id: 'q6', question: 'Como funciona a liquidez e o resgate?', answer: 'Depende do produto/operação. Em cada oportunidade você recebe o cronograma, política de liquidez e prazos de resgate antes da adesão.' },
        { id: 'q7', question: 'Posso receber salário, pagar contas e fazer PIX pelo app?', answer: 'Sim. Você recebe salário, paga contas e boletos, faz transferências e PIX diretamente pelo app, com organização inteligente e alertas de vencimento.' },
        { id: 'q8', question: 'Consigo sacar em Banco24Horas?', answer: 'Sim. É possível sacar em caixas da rede Banco24Horas em todo o Brasil usando seu cartão.' },
        { id: 'q9', question: 'Qual é o ticket mínimo para investir?', answer: 'Varia por operação e perfil. Em oportunidades com viés institucional, normalmente trabalhamos com tickets a partir de R$ 100 mil.' },
        { id: 'q10', question: 'Como falo com um especialista e faço adesão?', answer: 'Pelo botão “Solicitar proposta” ou chat/WhatsApp no app. Você recebe a documentação, assina digitalmente e acompanha tudo em tempo real.' },
      ]}
    />
    <CTA
      title="Pronto para investir com o HotInvest?"
      subtitle="Fale com um especialista e receba oportunidades selecionadas para seu perfil."
      buttonLabel="Falar com especialista"
      buttonLink="/solicitar-proposta"
      buttonColor="#16487E"
    />
  </div>
)

export default HotInvest