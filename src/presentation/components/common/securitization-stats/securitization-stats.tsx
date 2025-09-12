import S from './securitization-stats.module.scss';

const HeroStats = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.statistic}>
                        <h2 className={S.number}>R$ 1,8</h2>
                        <h3 className={S.unit}>bilhões+</h3>
                        <p className={S.description}>em recebíveis securitizados¹</p>
                    </div>

                    <div className={S.text}>
                        <p className={S.subtitle}>
                            Mais de 280 operações de securitização estruturadas para empresas
                            de todos os setores. Transformamos duplicatas, contratos e recebíveis
                            confirmados em capital disponível através de cessão fiduciária registrada.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroStats;