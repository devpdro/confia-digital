import { Meta, ReviewsHeader, ClientTestimonials, Awards, BusinessServices, HelpCompany, CTA, CTACards } from 'src/presentation/components';

const ClientReviews = () => {
    return (
        <div>
            <ReviewsHeader />
            <ClientTestimonials />
            <BusinessServices
                title="Transforme seus resultados como nossos clientes."
                description="Junte-se a centenas de empresas que já descobriram como acelerar o crescimento com nossas soluções financeiras personalizadas. Desde startups até grandes corporações, nossos clientes conquistam resultados excepcionais."
                buttonLabel="Simular operação"
                imageLeft={false}
                mobileImage="/api/placeholder/200/400"
                desktopImage="/api/placeholder/400/300"
                mobileImageAlt="Aplicativo Confia Capital - Resultados"
                desktopImageAlt="Dashboard de performance - Confia Capital"
            />
            <HelpCompany />
            <Awards />
            <CTA
                title="Pronto para se juntar aos nossos clientes de sucesso?"
                subtitle="Descubra como centenas de empresas já transformaram seus resultados. Solicite uma proposta personalizada e comece sua jornada de crescimento hoje mesmo."
                buttonLabel="Simular operação"
            />
        </div>
    );
};

export default ClientReviews;