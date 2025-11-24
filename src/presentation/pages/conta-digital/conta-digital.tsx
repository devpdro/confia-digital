import { Meta, CTA, CreditCard, FAQ, InvestmentsHeader, PricingTable, Stats, BenefitsInvest, CTACards } from 'src/presentation/components'

const ContaDigital = () => (
    <div>
        <Meta
            title="Conta Digital | Confia Capital"
            description="Conta digital completa, sem taxas e com todos os recursos que você precisa. PIX ilimitado, transferências gratuitas e cartão sem anuidade."
            keywords="conta digital, banco digital, conta sem taxa, pix ilimitado, transferências gratuitas, cartão sem anuidade, confia capital"
            image="http://confiacapital.com.br/og-conta-digital.png"
        />
        <InvestmentsHeader />
        <Stats
            title="Por que milhões de pessoas escolhem nosso banco digital"
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
                    value: 100,
                    suffix: "%",
                    label: "gratuita para sempre",
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
        <CreditCard title="Gerencie suas finanças com praticidade e segurança" subtitle="CONTA DIGITAL" />
        <PricingTable />
        <CTACards />
        <FAQ
            title="Perguntas frequentes sobre Conta Digital"
            themeColor="#16487E"
            items={[
                { id: 'q1', question: 'A Conta Digital cobra taxas de abertura ou manutenção?', answer: 'Não. A conta digital é 100% gratuita, sem tarifas de abertura, sem mensalidade e sem custos ocultos. Você só paga pelo que usar, com transparência total.' },
                { id: 'q2', question: 'Como a Conta Digital garante segurança?', answer: 'Seguimos as mais rigorosas práticas de proteção de dados, criptografia de ponta a ponta e conformidade regulatória. Todas as operações são monitoradas e você acompanha tudo pelo app com autenticação de dois fatores.' },
                { id: 'q3', question: 'Posso fazer PIX e transferências gratuitas?', answer: 'Sim. Nossa conta digital oferece PIX ilimitado e transferências gratuitas para qualquer banco. Você movimenta seu dinheiro quando e como quiser, sem pagar taxas.' },
                { id: 'q4', question: 'Quem pode abrir uma Conta Digital?', answer: 'Qualquer pessoa física ou jurídica pode abrir uma conta digital. O processo é rápido, 100% digital e sem análise de crédito. Basta ter os documentos em mãos.' },
                { id: 'q5', question: 'Quais funcionalidades estão disponíveis?', answer: 'Você tem acesso a conta digital completa, cartão de débito sem anuidade, PIX ilimitado, transferências gratuitas, pagamento de contas e boletos, além de investimentos e produtos financeiros diversos.' },
                { id: 'q6', question: 'Como funciona o cartão de débito?', answer: 'O cartão de débito é enviado gratuitamente para sua casa. Você pode usar em qualquer estabelecimento, sacar em caixas eletrônicos da rede Banco24Horas e fazer compras online com total segurança.' },
                { id: 'q7', question: 'Posso receber salário e pagar contas pelo app?', answer: 'Sim. Você pode receber salário, pagar contas e boletos, fazer PIX e transferências diretamente pelo app. Tudo organizado de forma inteligente com alertas de vencimento e controle financeiro completo.' },
                { id: 'q8', question: 'Consigo sacar dinheiro em caixas eletrônicos?', answer: 'Sim. Você pode sacar em qualquer caixa eletrônico da rede Banco24Horas em todo o Brasil usando seu cartão de débito, sem custos adicionais.' },
                { id: 'q9', question: 'Como faço para abrir minha conta?', answer: 'É simples e rápido. Clique em "Acessar minha conta" ou "Solicitar proposta", preencha seus dados, envie os documentos necessários e em poucos minutos sua conta estará ativa e pronta para uso.' },
                { id: 'q10', question: 'Preciso de algum valor mínimo para manter a conta?', answer: 'Não. Não há valor mínimo para abrir ou manter a conta. Você pode começar com qualquer valor e usar todos os recursos disponíveis desde o primeiro dia.' },
            ]}
        />
        <CTA
            title="Abra sua Conta Digital agora mesmo"
            subtitle="Processo 100% digital, rápido e sem burocracia. Comece a usar em poucos minutos."
            buttonLabel="Abrir conta agora"
            buttonLink="/solicitar-proposta"
            buttonColor="#16487E"
        />
    </div>
)

export default ContaDigital

