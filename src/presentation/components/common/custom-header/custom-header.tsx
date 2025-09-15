import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import S from './custom-header.module.scss';

const CustomHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.grid}>
                    <div className={S.text}>
                        <span className={S.subtitle}>
                            Estruturação sob medida
                        </span>
                        <h1 className={S.title}>
                            Operações sob medida que transformam seu negócio.
                        </h1>
                        <p className={S.description}>
                            Operações customizadas a partir de R$ 5 milhões. CRI e CRA sob medida com condições negociadas e garantias especiais para maximizar seus resultados.
                        </p>
                        <div className={S.button}>
                            <Button
                                typeStyle="btn1"
                                label="Solicitar estruturação"
                                size="md"
                                width="260px"
                            />
                        </div>
                        <div className={S.trust}>
                            <div className={S.rating}>
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="CVM - Comissão de Valores Mobiliários" />
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="Registro Securitizadora" />
                            </div>
                            <p className={S.disclaimer}>
                                Mais de R$ 150 milhões estruturados. Operações personalizadas com as melhores condições de mercado. Expertise comprovada em CRI e CRA.
                            </p>
                        </div>
                    </div>

                    <div className={S.visual}>
                        <img className={S.img} src={IMAGE.HEADER.src} alt="Estruturação customizada de operações" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomHeader;