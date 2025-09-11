import { IMAGE } from 'src/presentation/assets';
import S from './support.module.scss';

const Support = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Suporte especializado<br />
                            quando<br />
                            você precisar.
                        </h2>
                        
                        <div className={S.description}>
                            <p className={S.paragraph}>
                                O suporte personalizado que sua pequena empresa precisa está a apenas uma mensagem ou ligação de distância, com pessoas reais prontas para ajudar.
                            </p>
                            
                            <p className={S.paragraph}>
                                Você também pode explorar recursos autoguiados a qualquer momento em nossa{' '}
                                <a href="#" className={S.link}>Central de Ajuda</a>.
                            </p>
                        </div>
                    </div>
                    
                    <div className={S.imageContainer}>
                        <div className={S.imageWrapper}>
                            <img
                                src={IMAGE.TEMPORARIA.src}
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