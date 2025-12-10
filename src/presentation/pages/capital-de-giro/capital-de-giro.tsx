import { Meta, CTA, CreditCard, FAQ, CapitalGiroHeader, PricingTable, Stats, BenefitsInvest, CTACards, CapitalGiroSteps } from 'src/presentation/components'
import { TestimonialSlider } from 'src/components/ui/testimonial-slider-1'

const CapitalDeGiro = () => (
    <div>
        <Meta
            title="Capital de Giro | Confia Capital"
            description="Capital de giro completo, sem taxas e com todos os recursos que você precisa. PIX ilimitado, transferências gratuitas e cartão sem anuidade."
            keywords="capital de giro, banco digital, conta sem taxa, pix ilimitado, transferências gratuitas, cartão sem anuidade, confia capital"
            image="http://confiacapital.com.br/og-capital-de-giro.png"
        />
        <CapitalGiroHeader />
        <Stats
            title="Recursos rápidos para você não perder oportunidades"
            stats={[
                {
                    value: 24,
                    suffix: "h",
                    label: "para aprovação e liberação",
                    duration: 2.0
                },
                {
                    value: 100,
                    suffix: "%",
                    label: "digital, sem papelada",
                    duration: 2.0
                },
                {
                    value: 0,
                    prefix: "",
                    suffix: "",
                    label: "taxas escondidas",
                    duration: 1.5
                },
                {
                    value: 18,
                    suffix: "x",
                    label: "para pagar com flexibilidade",
                    duration: 2.5
                }
            ]}
        />
        <CapitalGiroSteps />
        <TestimonialSlider
            reviews={[
                {
                    id: 1,
                    name: "Ana Paula S.",
                    affiliation: "Grupo Inovação",
                    quote: "Estava com o caixa apertado e precisava de capital rápido. Em menos de 24h o dinheiro estava na conta. Zero taxas escondidas e condições transparentes desde o início.",
                    imageSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=600&fit=crop&q=80",
                    thumbnailSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=120&fit=crop&q=80",
                },
                {
                    id: 2,
                    name: "Carlos M.",
                    affiliation: "Construtora Horizonte",
                    quote: "Como MEI, consegui capital de giro sem garantias. Foi exatamente o que eu precisava para investir no crescimento da empresa. Processo simples e rápido!",
                    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&q=80",
                    thumbnailSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=120&fit=crop&q=80",
                },
                {
                    id: 3,
                    name: "Roberto L.",
                    affiliation: "TechStart Solutions",
                    quote: "A flexibilidade de pagamento em até 18x foi fundamental. Pude cobrir as despesas operacionais sem comprometer o fluxo de caixa. Recomendo!",
                    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&q=80",
                    thumbnailSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=120&fit=crop&q=80",
                },
                {
                    id: 4,
                    name: "Fernanda T.",
                    affiliation: "Consultoria Estratégica",
                    quote: "Nunca mais perdi uma oportunidade por falta de capital. Com aprovação em 24h e processo 100% online, consigo focar no que realmente importa: fazer meu negócio crescer.",
                    imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&q=80",
                    thumbnailSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=120&fit=crop&q=80",
                },
            ]}
        />
        <CTACards />
        <FAQ
            title="Perguntas frequentes sobre Capital de Giro"
            themeColor="#16487E"
            items={[
                { id: 'q1', question: 'Quanto tempo leva para aprovar e liberar o capital de giro?', answer: 'A aprovação e liberação do capital de giro acontecem em até 24 horas. Todo o processo é 100% digital, sem papelada, e você acompanha cada etapa em tempo real pelo nosso sistema.' },
                { id: 'q2', question: 'Quais são as taxas e condições do capital de giro?', answer: 'Transparência total: zero taxas escondidas. Todas as condições são apresentadas de forma clara antes da contratação. Você paga apenas o que foi acordado, sem surpresas ou custos ocultos.' },
                { id: 'q3', question: 'Como funciona o pagamento do capital de giro?', answer: 'Você tem flexibilidade total para pagar: até 1x parcelado, conforme sua necessidade de fluxo de caixa. O pagamento é feito de forma simples e automática, sempre respeitando o prazo acordado.' },
                { id: 'q4', question: 'Quem pode solicitar capital de giro?', answer: 'Empresas de todos os portes podem solicitar capital de giro: MEI, microempresas, pequenas, médias e grandes empresas. O processo é simples e rápido, com análise personalizada para cada perfil de negócio.' },
                { id: 'q5', question: 'Preciso de garantias para obter capital de giro?', answer: 'Depende do seu perfil. Para MEI e microempresas, oferecemos opções sem garantias. Para outros perfis, avaliamos caso a caso, sempre buscando a melhor solução para seu negócio.' },
                { id: 'q6', question: 'Qual o valor mínimo e máximo de capital de giro?', answer: 'Trabalhamos com valores flexíveis conforme a necessidade do seu negócio. Não há um valor mínimo fixo, e o valor máximo é definido após análise do seu perfil e capacidade de pagamento.' },
                { id: 'q7', question: 'O capital de giro afeta minha linha de crédito no banco?', answer: 'Não. O capital de giro é uma operação de crédito independente que não compromete suas linhas de crédito tradicionais. Você mantém total liberdade para negociar com outros bancos.' },
                { id: 'q8', question: 'Como é feita a análise para aprovação?', answer: 'A análise é 100% digital e rápida. Avaliamos o perfil da sua empresa, fluxo de caixa, histórico e capacidade de pagamento. Tudo de forma transparente e sem burocracia.' },
                { id: 'q9', question: 'Posso usar o capital de giro para qualquer finalidade?', answer: 'Sim. O capital de giro pode ser usado para cobrir despesas operacionais, investir em crescimento, aproveitar oportunidades de compra, ou qualquer necessidade financeira do seu negócio.' },
            ]}
        />
        <CTA
            title="Transforme oportunidades em resultados reais"
            subtitle="Não deixe a falta de capital de giro limitar o crescimento do seu negócio. Aprovação em até 24h, condições transparentes e flexibilidade total. Simule agora e veja quanto capital você pode ter disponível."
            buttonLabel="Simular capital de giro"
            buttonLink="/solicitar-proposta"
            buttonColor="#16487E"
        />
    </div>
)

export default CapitalDeGiro

