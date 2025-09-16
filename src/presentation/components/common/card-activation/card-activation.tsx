import { Button } from 'src/presentation/components';
import S from './card-activation.module.scss';

const CardActivation = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Precisa de acesso às nossas plataformas?
                    </h2>
                    
                    <p className={S.description}>
                        Aqui estão duas maneiras simples de solicitar acesso ou resolver problemas com suas credenciais.
                    </p>
                    
                    <div className={S.cards}>
                        <div className={S.card}>
                            <h3 className={S.cardTitle}>Por e-mail</h3>
                            <p className={S.cardDescription}>
                                Envie um e-mail solicitando acesso ou recuperação de credenciais.
                            </p>
                            <div className={S.cardButton}>
                                <Button
                                    typeStyle="btn1"
                                    label="Solicitar acesso"
                                    size="sm"
                                    width="200px"
                                />
                            </div>
                        </div>
                        
                        <div className={S.card}>
                            <h3 className={S.cardTitle}>WhatsApp</h3>
                            <p className={S.cardDescription}>
                                Entre em contato via WhatsApp para suporte rápido e direto.
                            </p>
                            <div className={S.cardButton}>
                                <Button
                                    typeStyle="btn1"
                                    label="Entrar em contato"
                                    size="sm"
                                    width="200px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardActivation;