import { motion } from 'framer-motion';
import S from './pricing-table.module.scss';

const PricingTable = () => {
    const tableData = [
        {
            service: "Taxa de manutenção (anual)",
            bluevine: "R$ 0,00",
            bluevineNote: true,
            competitors: "R$ 180 - R$ 540 perdidos"
        },
        {
            service: "Anuidade do cartão (anual)",
            bluevine: "R$ 0,00 para sempre",
            bluevineNote: true,
            competitors: "R$ 120 - R$ 600 cobrados"
        },
        {
            service: "Rendimento do seu dinheiro",
            bluevine: "150% acima da poupança",
            bluevineNote: true,
            competitors: "0% - não rende nada"
        },
        {
            service: "PIX e transferências",
            bluevine: "Ilimitado 24h gratuito",
            bluevineNote: true,
            competitors: "Limitado ou com taxas"
        },
        {
            service: "Atendimento ao cliente",
            bluevine: "Pessoas reais em minutos",
            bluevineNote: true,
            competitors: "Robôs e filas intermináveis"
        },
        {
            service: "Abertura de conta",
            bluevine: "3 minutos pelo celular",
            competitors: "Agência + documentos + espera"
        },
        {
            service: "Saques mensais (10x)",
            bluevine: "R$ 0,00 sempre",
            competitors: "R$ 30 - R$ 80 em taxas"
        },
        {
            service: "Cashback nas compras",
            bluevine: "Dinheiro de volta real",
            competitors: "Inexistente ou mínimo"
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Seu banco está sugando seu dinheiro.
                    </motion.h2>
                    
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Você paga mais de R$ 1.000 por ano em taxas desnecessárias. No HotInvest, seu dinheiro cresce em vez de diminuir. Veja a diferença:
                    </motion.p>
                    
                    <motion.div 
                        className={S.tableWrapper}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <table className={S.table}>
                            <thead>
                                <tr className={S.headerRow}>
                                    <th className={S.serviceHeader}></th>
                                    <th className={S.bluevineHeader}>
                                        <span className={S.brandName}>HotInvest</span>
                                    </th>
                                    <th className={S.competitorsHeader}>
                                        Bancos tradicionais<sup>1</sup>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <motion.tr 
                                        key={index} 
                                        className={S.dataRow}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.5 + (index * 0.08) 
                                        }}
                                    >
                                        <td className={S.serviceCell}>{row.service}</td>
                                        <td className={`${S.bluevineCell} ${row.bluevineNote ? S.highlighted : ''}`}>
                                            {row.bluevine}
                                            {row.bluevineNote && <sup>2</sup>}
                                        </td>
                                        <td className={S.competitorsCell}>{row.competitors}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    
                    <motion.div 
                        className={S.footer}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    >
                        <motion.a 
                            href="https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Confia%20Capital%20e%20queria%20abrir%20minha%20conta%20na%20HotInvest!" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={S.detailsLink}
                            whileHover={{ 
                                scale: 1.02,
                                color: "#0d47a1"
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            Abra sua conta gratuita e pare de perder dinheiro
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingTable;