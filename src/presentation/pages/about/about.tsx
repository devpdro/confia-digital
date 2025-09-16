import { Meta, AboutHeader, AboutValues, AboutAwards, CTA, CardActivation } from 'src/presentation/components';

const About = () => {
    return (
        <div>
            <Meta
                title="Sobre a Confia Capital | Quebrando barreiras na securitização"
                description="Conheça nossa história de transformação no mercado de capitais. Securitizadora autorizada CVM que transforma recebíveis em liquidez com tecnologia e agilidade."
                keywords="sobre confia capital, história securitizadora, mercado de capitais, securitização de recebíveis, CRI CRA, transformar recebíveis, liquidez empresarial, autorizada CVM"
                image="https://confiacapital.com.br/og-about.png"
            />
            <AboutHeader />
            <AboutValues />
            <AboutAwards />
            <CTA
                title="Quer fazer parte da nossa jornada como parceiro?"
                subtitle="Junte-se a nós e descubra como podemos crescer juntos. Conheça as oportunidades de parceria e faça parte do nosso ecossistema de sucesso."
                buttonLabel="Seja nosso parceiro"
                buttonLink="/parceiros"
            />
            <CardActivation
                title="Quer saber mais sobre nossa empresa?"
                description="Entre em contato conosco para conhecer melhor nossa história, valores e como podemos ajudar sua empresa a crescer."
                cards={[
                    {
                        title: "Fale conosco",
                        description: "Entre em contato direto com nossa equipe para esclarecer dúvidas sobre nossa empresa.",
                        buttonLabel: "Entrar em contato",
                        buttonLink: "mailto:contato@confiacapital.com.br"
                    },
                    {
                        title: "Agende uma reunião",
                        description: "Marque uma conversa com nossos especialistas para conhecer nossas soluções.",
                        buttonLabel: "Agendar reunião",
                        buttonLink: "/solicitar-proposta"
                    }
                ]}
            />
        </div>
    );
};

export default About;