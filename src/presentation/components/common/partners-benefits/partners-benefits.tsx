import { IMAGE } from 'src/presentation/assets';
import S from './partners-benefits.module.scss';

const PartnersBenefits = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Por que fazer parceria conosco?
                    </h2>
                    <p className={S.subtitle}>
                        Benefícios exclusivos que transformam sua empresa em um parceiro estratégico da Bluevine.
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
                                    <h3 className={S.stepTitle}>Soluções bancárias e de empréstimos que seus clientes vão adorar</h3>
                                    <p className={S.stepDescription}>
                                        Ofereça aos seus clientes acesso a produtos financeiros inovadores e competitivos que atendem às suas necessidades empresariais.
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
                                    <h3 className={S.stepTitle}>Processo de checkout online perfeito</h3>
                                    <p className={S.stepDescription}>
                                        Integração simples e eficiente que permite aos seus clientes acessar nossos serviços diretamente através da sua plataforma.
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
                                    <h3 className={S.stepTitle}>Suporte e recursos dedicados</h3>
                                    <p className={S.stepDescription}>
                                        Equipe especializada e materiais de apoio para garantir o sucesso da parceria e o melhor atendimento aos clientes.
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
                                    <h3 className={S.stepTitle}>Oportunidades para receita incremental</h3>
                                    <p className={S.stepDescription}>
                                        Gere receita adicional através de comissões atrativas e programas de incentivo para parceiros qualificados.
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