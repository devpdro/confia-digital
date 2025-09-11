import S from './pricing-table.module.scss';

const PricingTable = () => {
    const tableData = [
        {
            service: "Depósito mínimo de abertura",
            bluevine: "$ 0",
            competitors: "$ 0-$ 250"
        },
        {
            service: "Taxas de serviço mensais",
            bluevine: "$ 0 (para o plano Standard)",
            bluevineNote: true,
            competitors: "$ 0-$ 15"
        },
        {
            service: "Transações",
            bluevine: "Transações ilimitadas",
            bluevineNote: true,
            competitors: "Limites e/ou taxas de transação"
        },
        {
            service: "Taxas de cheque especial",
            bluevine: "$ 0",
            competitors: "$ 0-$ 35"
        },
        {
            service: "Taxas ACH padrão",
            bluevine: "$ 0",
            competitors: "Fora: $0-$1"
        },
        {
            service: "Taxas de transferência eletrônica de entrada",
            bluevine: "$ 0",
            competitors: "$ 0-$ 15"
        },
        {
            service: "Taxas de caixa eletrônico",
            bluevine: "Sem taxas de caixas eletrônicos na rede",
            bluevineNote: true,
            competitors: "N / D"
        },
        {
            service: "Faturamento",
            bluevine: "Grátis, ilimitado",
            competitors: "Podem ser aplicadas taxas e limites"
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Receba mais e pague menos.
                    </h2>
                    
                    <p className={S.subtitle}>
                        O dinheiro que você conquistou com tanto esforço deve continuar sendo seu. É por isso que não cobramos muitas das taxas cobradas por outras contas correntes comerciais.
                    </p>
                    
                    <div className={S.tableWrapper}>
                        <table className={S.table}>
                            <thead>
                                <tr className={S.headerRow}>
                                    <th className={S.serviceHeader}></th>
                                    <th className={S.bluevineHeader}>
                                        <span className={S.brandName}>bluevine</span>
                                    </th>
                                    <th className={S.competitorsHeader}>
                                        Outras contas correntes comerciais<sup>1</sup>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className={S.dataRow}>
                                        <td className={S.serviceCell}>{row.service}</td>
                                        <td className={`${S.bluevineCell} ${row.bluevineNote ? S.highlighted : ''}`}>
                                            {row.bluevine}
                                            {row.bluevineNote && <sup>2</sup>}
                                        </td>
                                        <td className={S.competitorsCell}>{row.competitors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className={S.footer}>
                        <a href="#" className={S.detailsLink}>
                            Veja nossa tabela de preços detalhada
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;