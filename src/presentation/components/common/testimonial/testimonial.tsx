import S from './testimonial.module.scss';

const Testimonial = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.card}>
                    <div className={S.quoteIcon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="#1a237e"/>
                        </svg>
                    </div>
                    
                    <blockquote className={S.quote}>
                        "Com o Bluevine, passo menos tempo com serviços bancários e mais tempo fazendo o que amo fazer."
                    </blockquote>
                    
                    <div className={S.author}>
                        <div className={S.authorInfo}>
                            <h4 className={S.authorName}>Leila B.</h4>
                            <p className={S.authorCompany}>Grupo Bulling Towne</p>
                        </div>
                        
                        <div className={S.serviceTag}>
                            <div className={S.serviceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="16" rx="2" fill="#1a237e"/>
                                    <rect x="4" y="6" width="16" height="2" fill="white"/>
                                    <rect x="4" y="10" width="8" height="2" fill="white"/>
                                    <rect x="4" y="14" width="12" height="2" fill="white"/>
                                </svg>
                            </div>
                            <span className={S.serviceText}>Serviços profissionais</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;