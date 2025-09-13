import { CTA } from 'src/presentation/components';
import CTACards from 'src/presentation/components/common/cta-cards/cta-cards';
import HelpCompany from 'src/presentation/components/common/help-company/help-company';
import PartnersBenefits from 'src/presentation/components/common/partners-benefits/partners-benefits';
import PartnersHeader from 'src/presentation/components/common/partners-header/partners-header';
import PartnersStats from 'src/presentation/components/common/partners-stats/partners-stats';
import PartnersTarget from 'src/presentation/components/common/partners-target/partners-target';
import S from 'src/presentation/styles/shared/policy-page.module.scss';

const Partners = () => {
    return (
        <div className={S.page}>
           <PartnersHeader />
           <PartnersStats />
           <PartnersBenefits />
           <CTACards />
           <PartnersTarget />
           <HelpCompany />
           <CTA />
        </div>
    );
};

export default Partners;