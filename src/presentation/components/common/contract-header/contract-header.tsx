import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import S from './contract-header.module.scss';

const ContractHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.grid}>
                    <div className={S.text}>
                        <span className={S.subtitle}>
                            Antecipação express
                        </span>
                        <h1 className={S.title}>
                            Contratos hoje. Dinheiro hoje.
                        </h1>
                        <p className={S.description}>
                            R$ 50K a R$ 2M liberados no mesmo dia. Zero burocracia, zero espera. Seus contratos assinados viram capital em 6 horas.
                        </p>
                        <div className={S.button}>
                            <Button
                                typeStyle="btn1"
                                label="Quero antecipar"
                                size="md"
                                width="200px"
                            />
                        </div>
                        <div className={S.trust}>
                            <div className={S.rating}>
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="CVM - Comissão de Valores Mobiliários" />
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="Registro Securitizadora" />
                            </div>
                            <p className={S.disclaimer}>
                                Mais de 2.800 contratos antecipados. Taxa média 2.8% ao mês. Aprovação em 6h ou seu dinheiro de volta.
                            </p>
                        </div>
                    </div>

                    <div className={S.visual}>
                        <img className={S.img} src={IMAGE.HEADER.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractHeader;