import {
    Meta,
    BusinessServices,
    Testimonial,
    Trust,
    Process,
    CTACards,
    FAQ,
    CTA,
    CustomHeader,
} from "src/presentation/components"

const FAQ_DATA = [
    {
        id: "1",
        question: "O que é estruturação customizada de operações?",
        answer: "É o processo de criar soluções financeiras sob medida para cada empresa, considerando suas necessidades específicas, perfil de risco e características dos recebíveis. Cada operação é única e estruturada para maximizar benefícios."
    },
    {
        id: "2",
        question: "Qual o valor mínimo para estruturação customizada?",
        answer: "Trabalhamos com operações a partir de R$ 5 milhões. Para valores menores, nossas soluções padronizadas de securitização podem ser mais adequadas e eficientes."
    },
    {
        id: "3",
        question: "Quanto tempo leva para estruturar uma operação customizada?",
        answer: "O prazo varia de 30 a 90 dias, dependendo da complexidade da operação, documentação necessária e aprovações regulatórias. Operações mais simples podem ser concluídas em 30 dias."
    },
    {
        id: "4",
        question: "Quais tipos de recebíveis podem ser estruturados?",
        answer: "Estruturamos operações com recebíveis imobiliários, do agronegócio, comerciais, de serviços, royalties, direitos creditórios diversos e fluxos de caixa previsíveis. Cada tipo requer análise específica."
    },
    {
        id: "5",
        question: "Como funciona a análise de viabilidade?",
        answer: "Realizamos due diligence completa incluindo análise jurídica, contábil, fiscal e de crédito. Avaliamos a qualidade dos recebíveis, dispersão de sacados e histórico de inadimplência para estruturar a melhor solução."
    },
    {
        id: "6",
        question: "Posso escolher os investidores da minha operação?",
        answer: "Sim, em operações customizadas você pode indicar investidores preferenciais ou definir perfis específicos. Também podemos captar investidores em nossa rede qualificada conforme suas preferências."
    },
    {
        id: "7",
        question: "Qual a diferença entre CRI e CRA customizados?",
        answer: "CRI são para recebíveis imobiliários e CRA para agronegócio. Ambos podem ser estruturados com características específicas como prazo, remuneração, garantias e eventos de vencimento antecipado conforme sua necessidade."
    },
    {
        id: "8",
        question: "Posso estruturar operações com garantias especiais?",
        answer: "Sim, podemos incluir garantias como fiança bancária, seguro garantia, penhor de recebíveis adicionais, aval de sócios ou outras estruturas que melhorem o rating e reduzam o custo da operação."
    },
    {
        id: "9",
        question: "Como são definidas as condições de remuneração?",
        answer: "As condições são negociadas considerando prazo, rating da operação, garantias oferecidas, qualidade dos recebíveis e condições de mercado. Buscamos sempre as melhores condições para sua empresa."
    },
    {
        id: "10",
        question: "Há acompanhamento pós-estruturação?",
        answer: "Sim, oferecemos gestão completa da operação incluindo cobrança, relacionamento com investidores, relatórios de performance e gestão de eventos. Você foca no seu negócio enquanto cuidamos da operação."
    }
];

const CustomStructuring = () => (
    <div>
        <Meta
            title="Estruturação Customizada de Operações CRI e CRA | Confia Capital"
            description="Estruturação customizada de operações de securitização sob medida. CRI e CRA personalizados a partir de R$5 milhões com condições negociadas e garantias especiais."
            keywords="estruturação customizada, securitização sob medida, CRI customizado, CRA personalizado, operações estruturadas, R$ 5 milhões, soluções financeiras"
            image="https://confiacapital.com.br/og-estruturacao-customizada.png"
        />
        <CustomHeader />
        <BusinessServices 
            title="Plataforma completa para estruturação customizada"
            description="Gerencie todo o processo de estruturação em uma única plataforma. Desde a análise inicial até a gestão pós-emissão, nossa tecnologia simplifica operações complexas de CRI e CRA personalizados."
            buttonLabel="Solicitar estruturação"
            imageLeft={true}
        />
        <Testimonial />
        <Trust
            title="Excelência em estruturação customizada."
            cards={[
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#010553', width: '50px', height: '50px', strokeWidth: '1.5' }}>
                            <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17ZM17 21V11H13V7H7V19H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ),
                    title: "Due Diligence Completa",
                    description: "Análise jurídica, contábil e fiscal detalhada. Avaliação de rating dos sacados, dispersão da carteira e histórico de inadimplência para estruturar a operação ideal."
                },
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#010553', width: '50px', height: '50px', strokeWidth: '1.5' }}>
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ),
                    title: "Estruturas Sob Medida",
                    description: "CRI e CRA personalizados com garantias especiais, prazos flexíveis e condições negociadas. Cada operação é única e estruturada para maximizar benefícios."
                },
                {
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#010553', width: '50px', height: '50px', strokeWidth: '1.5' }}>
                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0414 20.9983 15.5796 20.2 15.3874" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 3.13782C16.8604 3.35558 17.623 3.84687 18.1676 4.55332C18.7122 5.25977 19.0078 6.14532 19.0078 7.06891C19.0078 7.9925 18.7122 8.87805 18.1676 9.5845C17.623 10.291 16.8604 10.7822 16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ),
                    title: "Gestão Especializada",
                    description: "Acompanhamento pós-estruturação com gestão de cobrança, relacionamento com investidores e relatórios de performance. Equipe dedicada para sua operação."
                }
            ]}
        />
        <BusinessServices 
            title="Acompanhamento em tempo real das suas operações"
            description="Monitore o desempenho dos seus CRI e CRA com dashboards intuitivos. Relatórios automáticos, alertas personalizados e comunicação direta com investidores em uma interface moderna e responsiva."
            buttonLabel="Acessar dashboard"
            imageLeft={false}
        />
        <Process />
        <CTACards />
        <FAQ title="Perguntas frequentes sobre estruturação customizada."
            items={FAQ_DATA} />
        <CTA
            title="Pronto para estruturar uma operação sob medida?"
            subtitle="Fale com nossos especialistas e descubra como podemos criar a solução ideal para seus recebíveis a partir de R$ 5 milhões."
            buttonLabel="Solicitar estruturação"
        />
    </div>
)

export default CustomStructuring
