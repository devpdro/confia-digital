import { IMAGE } from 'src/presentation/assets';
import S from './how.module.scss';

const How = () => {
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
                                        Analisamos a qualidade dos seus pagadores, histórico de inadimplência e dispersão da carteira. Due diligence completa em até 48h.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Estruturação Personalizada</h3>
                                    <p className={S.stepDescription}>
                                        Desenhamos a operação sob medida: cessão fiduciária, conta escrow e covenants adequados ao seu perfil de risco.
                                    </p>
                                </div>
                            </div>

                            <div className={S.step}>
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Liberação Expressa</h3>
                                    <p className={S.stepDescription}>
                                        Taxa transparente baseada em dados reais. Recursos liberados entre D+1 e D+3 após assinatura dos contratos.
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

export default How;