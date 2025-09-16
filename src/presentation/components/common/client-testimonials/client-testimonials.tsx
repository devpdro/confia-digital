import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'src/presentation/components';
import S from './client-testimonials.module.scss';

interface Testimonial {
    id: string;
    quote: string;
    author: {
        name: string;
        title: string;
        company: string;
        avatar: string;
    };
    readMoreLink?: string;
}

interface ClientTestimonialsProps {
    className?: string;
}

const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ className }) => {
    const [showMore, setShowMore] = useState(false);

    const testimonials: Testimonial[] = [
        {
            id: '1',
            quote: 'Eu não acreditava que ia conseguir R$ 10 milhões tão rápido. A equipe da Confia é top, me atenderam até no final de semana! Agora posso tocar 3 obras ao mesmo tempo.',
            author: {
                name: 'João Pedro R.',
                title: 'Diretor',
                company: 'JP Construções',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '2',
            quote: 'Eu estava desconfiado no início, né? Mas depois que vi como funciona a securitização, nossa... mudou tudo! Consegui R$ 5 milhões sem comprometer meu balanço. Agora posso investir pesado na expansão.',
            author: {
                name: 'Ana Paula S.',
                title: 'Diretora Financeira',
                company: 'Grupo Inovação',
                avatar: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '3',
            quote: 'Cara, a Confia Capital salvou minha empresa! Estava com o caixa apertado e precisava de grana rápido. Em 3 dias consegui R$ 2 milhões antecipando meus contratos. Sem burocracia, sem enrolação.',
            author: {
                name: 'Carlos M.',
                title: 'CEO',
                company: 'Construtora Horizonte',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '4',
            quote: 'Mano, que diferença! Os bancos queriam me cobrar 3% ao mês, a Confia conseguiu 1,2%. Economizei mais de R$ 800 mil em juros. O pessoal lá entende do negócio mesmo.',
            author: {
                name: 'Roberto L.',
                title: 'Sócio-Fundador',
                company: 'TechStart Solutions',
                avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '5',
            quote: 'Eu estava com medo de não conseguir por ser uma empresa pequena, mas eles me trataram super bem. Consegui R$ 500 mil e já estou planejando a segunda operação.',
            author: {
                name: 'Fernanda T.',
                title: 'Sócia',
                company: 'Consultoria Estratégica',
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '6',
            quote: 'Sinceramente? Melhor decisão que tomei. Estava pagando 2,8% no banco, aqui consegui 1,5%. A diferença no final das contas é absurda. Recomendo de olhos fechados!',
            author: {
                name: 'Patricia K.',
                title: 'CFO',
                company: 'Agência Digital Pro',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '7',
            quote: 'Cara, que processo transparente! Eles me mostraram cada passo, cada taxa, cada prazo. Nada de letra miúda ou surpresa no final. Assim que é bom trabalhar.',
            author: {
                name: 'Eduardo M.',
                title: 'Fundador',
                company: 'E-commerce Brasil',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '8',
            quote: 'Nossa, que diferença! Estava há meses correndo atrás de crédito e só encontrava taxa abusiva. A Confia me ofereceu condições justas e em 10 dias já estava com R$ 1,2 milhão na conta. Salvaram meu negócio!',
            author: {
                name: 'Mariana F.',
                title: 'Proprietária',
                company: 'Rede Bella Vista',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
            }
        },
        {
            id: '9',
            quote: 'Rapaz, que agilidade! Mandei os documentos na segunda, na quarta já estava tudo aprovado. Nunca vi nada igual. O pessoal da Confia não brinca em serviço.',
            author: {
                name: 'Marcos V.',
                title: 'Diretor Geral',
                company: 'MV Empreendimentos',
                avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
            }
        }
    ];

    const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 3);

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div 
                    className={S.testimonialsGrid}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <AnimatePresence>
                        {visibleTestimonials.map((testimonial, index) => (
                            <motion.div 
                                key={testimonial.id} 
                                className={S.testimonialCard}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: "easeOut", 
                                    delay: index * 0.1 
                                }}
                                whileHover={{ 
                                    y: -5, 
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                            >
                                <motion.div 
                                    className={S.quoteIcon}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: "easeOut", 
                                        delay: (index * 0.1) + 0.2 
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </motion.div>

                                <motion.blockquote 
                                    className={S.quote}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: (index * 0.1) + 0.3 
                                    }}
                                >
                                    {testimonial.quote}
                                </motion.blockquote>

                                <motion.div 
                                    className={S.authorInfo}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: (index * 0.1) + 0.4 
                                    }}
                                >
                                    <motion.div 
                                        className={S.authorAvatar}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: (index * 0.1) + 0.5 
                                        }}
                                    >
                                        <img
                                            src={testimonial.author.avatar}
                                            alt={testimonial.author.name}
                                            className={S.avatarImage}
                                        />
                                    </motion.div>
                                    <div className={S.authorDetails}>
                                        <div className={S.authorName}>{testimonial.author.name}</div>
                                        <div className={S.authorTitle}>{testimonial.author.title}</div>
                                        <div className={S.authorCompany}>{testimonial.author.company}</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {!showMore && (
                    <motion.div 
                        className={S.showMoreContainer}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    >
                        <Button
                            typeStyle="btn3"
                            label="Ver mais depoimentos"
                            size="sm"
                            width="220px"
                            onClick={() => setShowMore(true)}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ClientTestimonials;