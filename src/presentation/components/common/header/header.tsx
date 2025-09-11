import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import S from './header.module.scss';

const Header = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.grid}>
                    <div className={S.text}>
                        <h1 className={S.title}>
                            {/* Confia em operações seguras e confiáveis */}
                            Transforme recebíveis em capital imediato                        </h1>
                        <p className={S.description}>
                            Contratos confirmados em liquidez imediata. Estruturamos operações que destravam crescimento sem comprometer o balanço.
                        </p>
                        <div className={S.button}>
                            <Button
                                typeStyle="btn1"
                                label="Calcular minha taxa"
                                size="md"
                                width="240px"
                            />
                        </div>
                        <div className={S.trust}>
                            <div className={S.rating}>
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="CVM - Comissão de Valores Mobiliários" />
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="Registro Securitizadora" />
                            </div>
                            <p className={S.disclaimer}>
                                Securitizadora autorizada pela <span className={S.link}>CVM</span>. Todas as operações são estruturadas conforme regulamentação do Banco Central e sujeitas à análise de crédito.
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

export default Header;
