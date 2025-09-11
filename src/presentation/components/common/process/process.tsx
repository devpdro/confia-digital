import { IMAGE } from 'src/presentation/assets';
import S from './process.module.scss';

const Process = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Como funciona nossa securitização na prática.
                    </h2>
                    <p className={S.subtitle}>
                        Processo estruturado que transforma seus recebíveis em capital de giro sem burocracia.²
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
                                    <h3 className={S.stepTitle}>Mapeamento dos Recebíveis</h3>
                                    <p className={S.stepDescription}>
                                        Analisamos seu portfólio de recebíveis para identificar as melhores oportunidades de securitização.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Estruturação da Operação</h3>
                                    <p className={S.stepDescription}>
                                        Criamos a estrutura jurídica e financeira ideal para maximizar o valor dos seus ativos.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Emissão e Distribuição</h3>
                                    <p className={S.stepDescription}>
                                        Realizamos a emissão dos títulos e distribuição para investidores qualificados.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>4</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Liberação dos Recursos</h3>
                                    <p className={S.stepDescription}>
                                        Você recebe o capital de giro imediatamente para impulsionar seu negócio.
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

export default Process;