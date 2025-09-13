import React from 'react';
import S from './reviews-header.module.scss';

interface PartnersHeaderProps {
    className?: string;
}

const ReviewsHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <h1 className={S.title}>Depoimentos de clientes.</h1>
                    <p className={S.subtitle}>
                        Junte-se a nós para expandir seus negócios e dar aos seus clientes acesso às 
                        soluções financeiras de que eles precisam.
                    </p>
                    <button className={S.ctaButton}>
                        Começar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReviewsHeader;
