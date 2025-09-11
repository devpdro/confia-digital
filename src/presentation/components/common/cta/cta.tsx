import { Button } from 'src/presentation/components';

import S from './cta.module.scss';

const CTA = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Pronto para transformar seus recebíveis em capital imediato?
                        </h2>
                        <p className={S.subtitle}>
                            Faça uma simulação sem compromisso e descubra quanto pode receber pelos seus recebíveis.
                        </p>
                    </div>

                    <div className={S.actionContent}>
                        <Button
                            typeStyle="btn2"
                            label="Simular operação"
                            size="md"
                            width="220px"
                        />

                        <div className={S.additionalInfo}>
                            <p className={S.infoText}>
                                Tem dúvidas sobre o processo?
                            </p>
                            <p className={S.linkText}>
                                Acesse nosso <a href="#" className={S.link}>Painel de Dúvidas</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;