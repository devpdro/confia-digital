import S from './about-header.module.scss';

interface AboutHeaderProps {
    className?: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.header} ${className || ''}`}>
            <div className={S.wrapper}>
                <div className={S.centeredContent}>
                    <div className={S.badge}>
                        SOBRE NÓS
                    </div>
                    <h1 className={S.title}>
                        Quem somos e nossa missão.
                    </h1>
                    <p className={S.description}>
                        Somos uma securitizadora autorizada pela CVM, dedicada a democratizar o acesso ao mercado de capitais. Nossa história é construída sobre pilares de inovação, transparência e compromisso com o crescimento sustentável de nossos parceiros.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHeader;
