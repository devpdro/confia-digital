import { IMAGE } from 'src/presentation/assets';

import S from './contract-process.module.scss';

const ContractProcess = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Como funciona a antecipação de contratos na prática.
                    </h2>
                    <p className={S.subtitle}>
                        Processo simples e rápido que transforma seus contratos em dinheiro no mesmo dia.
                    </p>

                    <div className={S.grid}>
                        <div className={S.steps}>
                            <div className={S.step}>
                                <div className={S.stepNumber}>1</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Envio da Documentação</h3>
                                    <p className={S.stepDescription}>
                                        Envie seu contrato assinado e documentos da empresa. Nossa equipe analisa em até 6 horas úteis.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Análise e Aprovação</h3>
                                    <p className={S.stepDescription}>
                                        Avaliamos a qualidade do pagador e calculamos o valor da antecipação entre 70% e 90% do contrato.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Recebimento Imediato</h3>
                                    <p className={S.stepDescription}>
                                        Após aprovação, o dinheiro é liberado via PIX ou TED no mesmo dia ou próximo dia útil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={S.imageContainer}>
                            <img
                                src={IMAGE.HOMEM_COMPUTADOR.src}
                                alt="Empresário analisando contratos no computador"
                                className={S.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractProcess;