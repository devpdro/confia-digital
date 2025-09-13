import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import S from './securitization-header.module.scss';

const SecuritizationHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.grid}>
                    <div className={S.text}>
                        <h1 className={S.title}>
                            {/* Securitização de recebíveis em liquidez imediata */}
                            Securitização de recebíveis que converte contratos em liquidez
                        </h1>
                        <p className={S.description}>
                            Estruturamos operações de securitização que transformam suas duplicatas, contratos e recebíveis confirmados em capital disponível em até 48h.
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
                            <p className={S.disclaimer}>
                                Relatórios mensais de performance. Acompanhamento em tempo real através de nossa plataforma proprietária HotSys.
                            </p>
                        </div>
                    </div>

                    <div className={S.visual}>
                        <img className={S.img} src={IMAGE.EMPRESARIO.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritizationHeader;
