import {
    Meta,
    IntranetHeader,
    IntranetPlatforms,
    Testimonial,
    Support,
    CardActivation,
    CTA,
} from "src/presentation/components"

const Intranet = () => (
    <div>
        <Meta
            title="Intranet Confia Capital | Portal do Cliente"
            description="Acesse sua área exclusiva para acompanhar operações de securitização, relatórios de performance e gestão de recebíveis em tempo real."
            keywords="intranet, portal do cliente, securitização, acompanhamento de operações, relatórios, gestão de recebíveis, Confia Capital"
            image="https://confiacapital.com.br/og-intranet.png"
        />
        <IntranetHeader />
        <IntranetPlatforms />
        <Testimonial
            quote="As plataformas da Confia Capital facilitaram muito nosso trabalho diário. O acesso centralizado economiza tempo e a integração entre os sistemas é perfeita. Nossa produtividade aumentou significativamente."
            authorName="Roberto Silva"
            authorCompany="Diretor Comercial - Grupo Horizonte"
            serviceText="Cliente Confia Capital"
            serviceIcon={
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }
        />
        <Support />
        <CTA
            title="Dúvidas sobre as plataformas?"
            subtitle="Entre em contato conosco para esclarecimentos sobre o uso das ferramentas ou problemas de acesso às plataformas."
            buttonLabel="Entrar em contato"
            buttonLink="https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Digital!"
        />
        <CardActivation />
    </div>
)

export default Intranet
