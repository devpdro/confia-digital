import S from './stats.module.scss';

const Stats = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        A referência em securitização de recebíveis no mercado brasileiro¹
                    </h2>
                    <div className={S.grid}>
                        <div className={S.item}>
                            <div className={S.number}>500+</div>
                            <div className={S.label}>empresas financiadas</div>
                        </div>

                        <div className={S.item}>
                            <div className={S.number}>R$ 2.8Bi</div>
                            <div className={S.label}>em recebíveis estruturados²</div>
                        </div>

                        <div className={S.item}>
                            <div className={S.number}>48h</div>
                            <div className={S.label}>tempo médio de liberação</div>
                        </div>

                        <div className={S.item}>
                            <div className={S.number}>98%</div>
                            <div className={S.label}>taxa de aprovação³</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
