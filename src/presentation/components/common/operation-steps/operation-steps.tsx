import { IMAGE } from 'src/presentation/assets';

import S from './operation-steps.module.scss';

const OperationSteps = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Como estruturamos sua operação de securitização
                    </h2>
                    <p className={S.subtitle}>
                        Processo institucional que converte recebíveis em liquidez através de cessão fiduciária registrada.
                    </p>

                    <div className={S.grid}>
                        <div className={S.imageContainer}>
                            <img
                                src={IMAGE.HOMEM_COMPUTADOR.src}
                                alt="Mulher trabalhando no computador"
                                className={S.image}
                            />
                        </div>

                        <div className={S.steps}>
                            <div className={S.step}>
                                <div className={S.stepNumber}>1</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Análise de Recebíveis</h3>
                                    <p className={S.stepDescription}>
                                        Due diligence completa: rating dos sacados, histórico de pagamento e dispersão da carteira. Análise de risco em até 48h.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Estruturação Jurídica</h3>
                                    <p className={S.stepDescription}>
                                        Cessão fiduciária registrada, conta centralizadora e documentação CVM. Estrutura sob medida para seu perfil de crédito.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Liquidação e Repasse</h3>
                                    <p className={S.stepDescription}>
                                        Recursos liberados em D+1 após assinatura. Acompanhamento da cobrança através da nossa plataforma HotSys.
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

export default OperationSteps;