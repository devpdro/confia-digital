import {
    Meta,
    InvestmentsHeader,
    Stats,
    ContractTypes,
    Trust,
    CTACards,
    CTA,
} from "src/presentation/components"

const BusinessAccount = () => (
    <div>
        <Meta
            title="Conta Digital e Investimentos HotInvest | Confia Capital"
            description="Banco digital sem tarifas com investimentos que rendem mais que a poupança. Conta gratuita, cartão sem anuidade e produtos financeiros inteligentes para fazer seu dinheiro crescer."
            keywords="banco digital, conta digital gratuita, investimentos rentáveis, cartão sem anuidade, transferências gratuitas, rendimento automático, produtos financeiros, conta sem tarifa, HotInvest, banco online, aplicativo financeiro, investir dinheiro"
            image="http://confiacapital.com.br/og-investimentos.png"
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
        <ContractTypes />
        <Trust 
            title="Segurança e confiança que você merece."
            cards={[
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ),
                    title: "Regulamentação Banco Central",
                    description: "Instituição financeira regulamentada e supervisionada pelo Banco Central do Brasil, seguindo todas as normas de segurança e proteção."
                },
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="#010553" strokeWidth="2" />
                            <circle cx="12" cy="16" r="1" fill="#010553" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#010553" strokeWidth="2" />
                        </svg>
                    ),
                    title: "Proteção Total dos Dados",
                    description: "Criptografia de ponta a ponta, autenticação biométrica e conformidade total com LGPD para máxima segurança das suas informações."
                },
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 8H7" stroke="#010553" strokeWidth="2" strokeLinecap="round" />
                            <path d="M17 12H7" stroke="#010553" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ),
                    title: "Suporte 24h Disponível",
                    description: "Atendimento humanizado disponível 24 horas por dia através do app, chat online e telefone para resolver qualquer dúvida rapidamente."
                }
            ]}
        />
        <CTACards />
        <CTA 
            title="Abra sua conta digital gratuita agora mesmo."
            subtitle="Sem tarifas, sem burocracia e com investimentos que rendem mais que a poupança. Comece a fazer seu dinheiro trabalhar para você."
            buttonLabel="Abrir minha conta"
            buttonLink="https://hotinvest.dbs.moneyp.com.br/login"
        />
    </div>
)

export default BusinessAccount
