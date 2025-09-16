import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import S from './partners-benefits.module.scss';

const PartnersBenefits = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        O que nossos parceiros já conquistaram.
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Mais de 200 parceiros já expandiram seus negócios e aumentaram sua receita com nossas soluções de securitização. Veja os benefícios reais.
                    </motion.p>

                    <motion.div 
                        className={S.grid}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        >
                            <img
                                src={IMAGE.MULHERES_MORENAS.src}
                                alt="Profissionais colaborando - Parceiras de sucesso"
                                className={S.image}
                            />
                        </motion.div>

                        <motion.div 
                            className={S.steps}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        >
                            {[
                                {
                                    title: "Soluções de securitização que seus clientes vão adorar",
                                    description: "Ofereça aos seus clientes acesso a estruturas CRI e CRA inovadoras que transformam recebíveis em capital imediato com condições competitivas."
                                },
                                {
                                    title: "Processo de estruturação ágil e eficiente",
                                    description: "Plataforma digital integrada que permite análise, estruturação e aprovação de operações de securitização em tempo recorde."
                                },
                                {
                                    title: "Suporte especializado em securitização",
                                    description: "Equipe de especialistas em mercado de capitais e materiais técnicos para capacitar sua equipe e garantir o sucesso das operações."
                                },
                                {
                                    title: "Receita recorrente e escalável",
                                    description: "Modelo de remuneração atrativo com comissões por operação estruturada e bônus por volume, garantindo crescimento sustentável."
                                }
                            ].map((step, index) => (
                                <motion.div 
                                    key={index}
                                    className={S.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.6 + (index * 0.1) 
                                    }}
                                    whileHover={{ 
                                        x: 5, 
                                        transition: { duration: 0.3, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.div 
                                        className={S.stepIcon}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 0.7 + (index * 0.1) 
                                        }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <motion.div 
                                        className={S.stepContent}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.8 + (index * 0.1) 
                                        }}
                                    >
                                        <h3 className={S.stepTitle}>{step.title}</h3>
                                        <p className={S.stepDescription}>
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersBenefits;