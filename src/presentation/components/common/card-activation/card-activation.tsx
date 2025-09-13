import { Button } from 'src/presentation/components';
import S from './card-activation.module.scss';

const CardActivation = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Já é titular de um cartão de crédito empresarial Bluevine ?
                    </h2>
                    
                    <p className={S.description}>
                        Aqui estão duas maneiras simples de ativar seu novo Bluevine Business Cashback Mastercard.
                    </p>
                    
                    <div className={S.cards}>
                        <div className={S.card}>
                            <h3 className={S.cardTitle}>On-line</h3>
                            <p className={S.cardDescription}>
                                Entre e ative no seu painel do Bluevine.
                            </p>
                            <div className={S.cardButton}>
                                <Button
                                    typeStyle="btn1"
                                    label="Ativar cartão"
                                    size="sm"
                                    width="140px"
                                />
                            </div>
                        </div>
                        
                        <div className={S.card}>
                            <h3 className={S.cardTitle}>Pelo telefone</h3>
                            <p className={S.cardDescription}>
                                Ligue para (888) 234-7998 para confirmar os detalhes do seu cartão.
                            </p>
                            <div className={S.cardButton}>
                                <Button
                                    typeStyle="btn1"
                                    label="Ligue agora"
                                    size="sm"
                                    width="140px"
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