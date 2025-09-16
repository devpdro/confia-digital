import { motion } from 'framer-motion';
import S from './testimonial.module.scss';

interface TestimonialProps {
    quote?: string;
    authorName?: string;
    authorCompany?: string;
    serviceText?: string;
    serviceIcon?: React.ReactNode;
}

const Testimonial: React.FC<TestimonialProps> = ({
    quote = "Precisava de capital para um novo empreendimento e os bancos só ofereciam juros absurdos. A Confia Capital estruturou nossos recebíveis de forma inteligente e conseguimos R$ 8 milhões com condições muito melhores. Recomendo de olhos fechados!",
    authorName = "Carlos M.",
    authorCompany = "Construtora Horizonte",
    serviceText = "Estruturação CRI",
    serviceIcon = (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1a237e"/>
            <path d="M2 17L12 22L22 17" fill="#1a237e"/>
            <path d="M2 12L12 17L22 12" fill="#1a237e"/>
        </svg>
    )
}) => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.card}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.quoteIcon}
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" fill="#1a237e"/>
                        </svg>
                    </motion.div>
                    
                    <motion.blockquote 
                        className={S.quote}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        "{quote}"
                    </motion.blockquote>
                    
                    <motion.div 
                        className={S.author}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        <motion.div 
                            className={S.authorInfo}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        >
                            <h4 className={S.authorName}>{authorName}</h4>
                            <p className={S.authorCompany}>{authorCompany}</p>
                        </motion.div>
                        
                        <motion.div 
                            style={{width: '2px', height: '40px', backgroundColor: '#1a237e', margin: '0 1rem'}}
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                        ></motion.div>
                        
                        <motion.div 
                            className={S.serviceTag}
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        >
                            <div className={S.serviceIcon}>
                                {serviceIcon}
                            </div>
                            <span className={S.serviceText}>{serviceText}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;