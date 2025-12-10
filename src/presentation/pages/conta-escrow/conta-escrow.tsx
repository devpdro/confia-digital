import { Meta, CTA, FAQ, EscrowHeader, Stats, EscrowBenefits, BusinessServices } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const ContaEscrow = () => (
    <div>
        <Meta
            title="Conta Escrow | Confia Capital"
            description="Proteja suas transações com Conta Escrow. Segurança e transparência em negociações complexas com garantia de fundos até o cumprimento das condições acordadas."
            keywords="conta escrow, conta garantia, transações seguras, proteção fundos, negociações imobiliárias, confia capital"
            image="http://confiacapital.com.br/og-conta-escrow.png"
        />
        <EscrowHeader />
        <Stats
            title="Segurança e transparência em cada transação"
            stats={[
                {
                    value: 100,
                    suffix: "%",
                    label: "proteção dos fundos",
                    duration: 2.0
                },
                {
                    value: 0,
                    prefix: "R$ ",
                    suffix: "",
                    label: "taxa de abertura",
                    duration: 1.5
                },
                {
                    value: 24,
                    suffix: "h",
                    label: "suporte disponível",
                    duration: 2.0
                },
                {
                    value: 100,
                    suffix: "%",
                    label: "regulamentado pelo BC",
                    duration: 2.5
                }
            ]}
        />
        <EscrowBenefits />
        <BusinessServices
            title="Transforme seus resultados como nossos clientes."
            description="Junte-se a centenas de empresas que já descobriram como acelerar o crescimento com nossas soluções financeiras personalizadas. Desde startups até grandes corporações, nossos clientes conquistam resultados excepcionais."
            buttonLabel="Solicitar proposta"
            imageLeft={false}
            desktopImage={IMAGE.PESSOAS_SORRINDO.src}
            desktopImageAlt="Clientes satisfeitos - Empresas que transformaram resultados com Confia Capital"
        />
        <FAQ
            title="Perguntas frequentes sobre Conta Escrow"
            themeColor="#16487E"
            items={[
                { id: 'q1', question: 'O que é uma Conta Escrow e para que serve?', answer: 'Conta Escrow é uma conta de garantia onde os fundos ficam protegidos até que todas as condições acordadas sejam cumpridas. É ideal para transações imobiliárias, fusões, aquisições e negociações complexas que exigem segurança e transparência para todas as partes.' },
                { id: 'q2', question: 'Como funciona a liberação dos fundos na Conta Escrow?', answer: 'Os fundos permanecem protegidos na conta até que todas as condições estabelecidas no contrato sejam cumpridas. Assim que todas as condições forem atendidas, a liberação é feita de forma rápida e automática, sem burocracias desnecessárias.' },
                { id: 'q3', question: 'A Conta Escrow é segura e regulamentada?', answer: 'Sim. Nossa Conta Escrow é totalmente regulamentada pelo Banco Central do Brasil e opera em conformidade com todas as normas vigentes. Os fundos ficam protegidos e todas as operações são rastreáveis e transparentes.' },
                { id: 'q4', question: 'Quais são as taxas da Conta Escrow?', answer: 'Não cobramos taxa de abertura. Nossas taxas são transparentes e variam conforme o tipo e complexidade da transação. Todas as condições são apresentadas de forma clara antes da contratação, sem custos ocultos.' },
                { id: 'q5', question: 'Quanto tempo leva para abrir uma Conta Escrow?', answer: 'O processo de abertura é rápido e pode ser feito em poucos dias úteis. Nossa equipe especializada auxilia em todas as etapas, desde a documentação até a configuração da conta, garantindo agilidade sem comprometer a segurança.' },
                { id: 'q6', question: 'Posso usar Conta Escrow para transações imobiliárias?', answer: 'Sim. A Conta Escrow é amplamente utilizada em transações imobiliárias, garantindo que o comprador tenha segurança de que o valor estará disponível e o vendedor tenha garantia de recebimento quando todas as condições forem cumpridas.' },
                { id: 'q7', question: 'O que acontece se alguma condição não for cumprida?', answer: 'Os fundos permanecem protegidos na conta até que todas as condições sejam cumpridas ou até que as partes acordem sobre a destinação dos valores. Nossa equipe auxilia na resolução de impasses e garante transparência em todo o processo.' },
                { id: 'q8', question: 'A Conta Escrow oferece suporte durante a transação?', answer: 'Sim. Oferecemos suporte especializado durante toda a transação, com equipe dedicada para auxiliar em questões técnicas, documentais e operacionais, garantindo que o processo seja conduzido com segurança e eficiência.' },
            ]}
        />
        <CTA
            title="Proteja suas transações com Conta Escrow"
            subtitle="Segurança, transparência e agilidade para negociações complexas. Abra sua Conta Escrow e garanta proteção total dos fundos até o cumprimento de todas as condições."
            buttonLabel="Solicitar Conta Escrow"
            buttonLink="/solicitar-proposta"
            buttonColor="#16487E"
        />
    </div>
)

export default ContaEscrow

