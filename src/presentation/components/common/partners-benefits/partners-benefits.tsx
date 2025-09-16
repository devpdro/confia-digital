import { IMAGE } from 'src/presentation/assets';
import S from './partners-benefits.module.scss';

const PartnersBenefits = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        O que nossos parceiros já conquistaram.
                    </h2>
                    <p className={S.subtitle}>
                        Mais de 200 parceiros já expandiram seus negócios e aumentaram sua receita com nossas soluções de securitização. Veja os benefícios reais.
                    </p>

                    <div className={S.grid}>
                        <div className={S.imageContainer}>
                            <img
                                src={IMAGE.HOMEM_COMPUTADOR.src}
                                alt="Profissional trabalhando no computador"
                                className={S.image}
                            />
                        </div>

                        <div className={S.steps}>
                            <div className={S.step}>
                                <div className={S.stepIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Soluções de securitização que seus clientes vão adorar</h3>
                                    <p className={S.stepDescription}>
                                        Ofereça aos seus clientes acesso a estruturas CRI e CRA inovadoras que transformam recebíveis em capital imediato com condições competitivas.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Processo de estruturação ágil e eficiente</h3>
                                    <p className={S.stepDescription}>
                                        Plataforma digital integrada que permite análise, estruturação e aprovação de operações de securitização em tempo recorde.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Suporte especializado em securitização</h3>
                                    <p className={S.stepDescription}>
                                        Equipe de especialistas em mercado de capitais e materiais técnicos para capacitar sua equipe e garantir o sucesso das operações.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Receita recorrente e escalável</h3>
                                    <p className={S.stepDescription}>
                                        Modelo de remuneração atrativo com comissões por operação estruturada e bônus por volume, garantindo crescimento sustentável.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersBenefits;