import { Meta, ContactHeader, CTA } from 'src/presentation/components';

const Contact = () => {
    return (
        <div>
            <Meta
                title="Contato | Confia Capital"
                description="Entre em contato com a Confia Capital através do email ou WhatsApp. Nossa equipe está pronta para ajudar você com suas necessidades financeiras."
                keywords="contato confia capital, suporte confia capital, email confia capital, whatsapp confia capital, atendimento confia capital"
            />
            <ContactHeader />
            <CTA
                title="Precisa de mais informações?"
                subtitle="Nossa equipe está pronta para ajudar você. Entre em contato através dos botões acima ou solicite uma proposta personalizada."
                buttonLabel="Solicitar proposta"
                buttonLink="/solicitar-proposta"
            />
        </div>
    );
};

export default Contact;

