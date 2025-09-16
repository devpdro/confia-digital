import {
    Meta,
    PartnersHeader,
    PartnersStats,
    PartnersBenefits,
    Trust,
    PartnersTarget,
    FAQ,
    HelpCompany,
    CTA,
} from 'src/presentation/components';

const FAQ_DATA = [
    {
        id: "1",
        question: "Como me tornar parceiro da Confia Capital?",
        answer: "Para se tornar nosso parceiro, você precisa ter CNPJ ativo, experiência no mercado financeiro ou relacionamento com empresas que precisam de capital. Após o cadastro, nossa equipe avalia o perfil e libera o acesso à plataforma de parceiros."
    },
    {
        id: "2",
        question: "Qual é a estrutura de comissões para parceiros?",
        answer: "Oferecemos comissões competitivas que variam de 0,5% a 2% sobre o valor das operações estruturadas, dependendo do volume mensal e tipo de cliente. Parceiros com maior volume têm acesso a bônus adicionais e condições especiais."
    },
    {
        id: "3",
        question: "Preciso ter conhecimento técnico em securitização?",
        answer: "Não é obrigatório. Fornecemos treinamento completo sobre securitização, materiais técnicos e suporte especializado. Nossa equipe acompanha você em todas as etapas até que se sinta confortável para atuar de forma independente."
    },
    {
        id: "4",
        question: "Qual o valor mínimo de operação para gerar comissão?",
        answer: "Operações a partir de R$ 500 mil geram comissão para parceiros. Para valores menores, trabalhamos com nossa solução de Antecipação de Contratos, que também oferece remuneração aos parceiros."
    },
    {
        id: "5",
        question: "Como funciona o suporte técnico para parceiros?",
        answer: "Cada parceiro tem acesso a um gerente dedicado, plataforma online com materiais técnicos, webinars mensais e suporte via WhatsApp. Também oferecemos acompanhamento presencial para grandes parceiros."
    },
    {
        id: "6",
        question: "Quando recebo as comissões das operações?",
        answer: "As comissões são pagas em até 5 dias úteis após a liberação dos recursos para o cliente final. O pagamento é feito via PIX ou TED, com relatório detalhado de todas as operações do período."
    }
];

const Partners = () => {
    return (
        <div>
            <Meta
                title="Seja Nosso Parceiro | Confia Capital "
                description="Junte-se à Confia Capital e expanda seus negócios. Ofereça soluções de securitização aos seus clientes e ganhe com nossa parceria estratégica no mercado de capitais."
                keywords="parceria confia capital, seja parceiro securitizadora, programa de parceiros, oportunidades negócio securitização, rede parceiros CRI CRA, colaboração empresarial"
                image="https://confiacapital.com.br/og-partners.png"
            />
            <PartnersHeader />
            <PartnersStats />
            <PartnersBenefits />
            <Trust 
                title="Por que confiar na Confia Capital como parceiro?"
                cards={[
                    {
                        icon: (
                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9 12L11 14L15 10" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         ),
                        title: "Autorização CVM",
                        description: "Securitizadora devidamente autorizada pela CVM com governança institucional e compliance rigoroso para garantir segurança nas operações."
                    },
                    {
                        icon: (
                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M2 17L12 22L22 17" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M2 12L12 17L22 12" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         ),
                        title: "Track Record Comprovado",
                        description: "Mais de R$ 1,8 bilhão em operações estruturadas e 200+ parceiros ativos que comprovam nossa expertise e confiabilidade no mercado."
                    },
                    {
                        icon: (
                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <circle cx="9" cy="7" r="4" stroke="#010553" strokeWidth="2" />
                                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         ),
                        title: "Suporte Especializado",
                        description: "Equipe dedicada de especialistas em securitização, materiais técnicos exclusivos e acompanhamento personalizado para cada parceiro."
                    }
                ]}
            />
            <PartnersTarget />
            <FAQ title="Dúvidas frequentes sobre nossa parceria." items={FAQ_DATA} />
            <HelpCompany />
            <CTA />
        </div>
    );
};

export default Partners;