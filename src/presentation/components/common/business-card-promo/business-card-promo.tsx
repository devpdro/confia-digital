import { IMAGE } from 'src/presentation/assets';
import S from './business-card-promo.module.scss';
import { Button } from '../../form';

const BusinessCardPromo = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.iconWrapper}>
                        <img src={IMAGE.PLANTA_DINHEIRO.src} alt="" />
                    </div>

                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Calcule quanto seus contratos valem hoje.
                            Simulação gratuita e sem compromisso.
                        </h2>

                        <div className={S.description}>
                            <p>
                                Nossa <strong>calculadora online</strong> mostra exatamente quanto você recebe
                                pelos seus contratos em menos de 2 minutos.
                                Informe valor e prazo, veja o resultado na hora com
                                taxa transparente desde 2.8% ao mês.
                            </p>
                        </div>

                        <div className={S.cta}>
                            <Button
                                typeStyle="btn1"
                                label="Calcular minha taxa"
                                size="md"
                                width="280x"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessCardPromo;