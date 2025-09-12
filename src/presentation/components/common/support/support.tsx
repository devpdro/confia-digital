import { IMAGE } from 'src/presentation/assets';
import S from './support.module.scss';

const Support = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Acompanhamento dedicado durante toda operação.
                        </h2>

                        <div className={S.description}>
                            <p className={S.paragraph}>
                                Time especializado em securitização para orientar sua empresa em cada etapa: da estruturação inicial até o acompanhamento da cobrança dos recebíveis.
                            </p>

                            <p className={S.paragraph}>
                                Acesse relatórios de performance em tempo real através da nossa plataforma{' '}
                                <a href="#" className={S.link}>HotSys</a> ou consulte nosso{' '}
                                <a href="#" className={S.link}>Centro de Conhecimento</a>.
                            </p>
                        </div>
                    </div>

                    <div className={S.imageContainer}>
                        <div className={S.imageWrapper}>
                            <img
                                src={IMAGE.SUPORTE.src}
                                alt="Atendente sorrindo com headset"
                                className={S.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;