import {
    Meta,
    CTA,
} from "src/presentation/components"

const ContaEscrow = () => (
    <div>
        <Meta
            title="Conta Escrow | Confia Capital"
            description="Proteja suas transações com Conta Escrow. Segurança e transparência em negociações complexas com garantia de fundos até o cumprimento das condições acordadas."
            keywords="conta escrow, conta garantia, transações seguras, proteção fundos, negociações imobiliárias, confia capital"
            image="http://confiacapital.com.br/og-conta-escrow.png"
        />
        <div style={{ padding: '4rem 1.5rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0D447E' }}>Conta Escrow</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem', maxWidth: '600px' }}>
                Proteja suas transações complexas com uma conta de garantia. Os fundos ficam seguros até o cumprimento de todas as condições acordadas, garantindo transparência e confiança para todas as partes envolvidas.
            </p>
        </div>
        <CTA
            title="Quer saber mais sobre Conta Escrow?"
            subtitle="Nossa equipe está pronta para ajudar você."
            buttonLabel="Solicitar proposta"
            buttonLink="/solicitar-proposta"
        />
    </div>
)

export default ContaEscrow


