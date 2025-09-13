import { Awards, CreditAccess, CTA } from 'src/presentation/components';
import BusinessServices from 'src/presentation/components/common/business-services/business-services';
import ClientTestimonials from 'src/presentation/components/common/client-testimonials/client-testimonials';
import HelpCompany from 'src/presentation/components/common/help-company/help-company';
import PartnersTarget from 'src/presentation/components/common/partners-target/partners-target';
import ReviewsHeader from 'src/presentation/components/common/reviews-header/reviews-header';
import S from 'src/presentation/styles/shared/policy-page.module.scss';

const ClientReviews = () => {
    return (
        <div className={S.page}>
            <ReviewsHeader />
            <ClientTestimonials />
            <Awards />
            <BusinessServices />
            <HelpCompany />
            <CTA />
        </div>
    );
};

export default ClientReviews;