import { Meta, ReviewsHeader, ClientTestimonials, Awards, BusinessServices, HelpCompany, CTA, CTACards } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

const ClientReviews = () => {
    return (
        <div>
            <Meta
                title="Depoimentos de Clientes | Confia Capital"
                description="Veja o que nossos clientes falam sobre nossas soluções de securitização. Histórias reais de empresas que transformaram recebíveis em capital com a Confia Capital."
                keywords="depoimentos clientes confia capital, avaliações securitização, testemunhos empresas, casos de sucesso securitizadora, feedback clientes CRI CRA, experiências transformação recebíveis"
                image="https://confiacapital.com.br/og-client-reviews.png"
            />
            <ReviewsHeader />
            <ClientTestimonials />
            <BusinessServices
                title="Transforme seus resultados como nossos clientes."
                description="Junte-se a centenas de empresas que já descobriram como acelerar o crescimento com nossas soluções financeiras personalizadas. Desde startups até grandes corporações, nossos clientes conquistam resultados excepcionais."
                buttonLabel="Solicitar proposta"
                imageLeft={false}
                desktopImage={IMAGE.PESSOAS_SORRINDO.src}
                desktopImageAlt="Clientes satisfeitos - Empresas que transformaram resultados com Confia Capital"
            />
            <HelpCompany />
            <Awards />
            <CTA
                title="Pronto para se juntar aos nossos clientes de sucesso?"
                subtitle="Descubra como centenas de empresas já transformaram seus resultados. Solicite uma proposta personalizada e comece sua jornada de crescimento hoje mesmo."
                buttonLabel="Solicitar proposta"
            />
        </div>
    );
};

export default ClientReviews;