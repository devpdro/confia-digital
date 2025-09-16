import React from 'react';
import S from './reviews-header.module.scss';

interface PartnersHeaderProps {
    className?: string;
}

const ReviewsHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.header} ${className || ''}`}>
            <div className={S.wrapper}>
                <div className={S.centeredContent}>
                    <div className={S.badge}>
                        DEPOIMENTOS
                    </div>
                    <h1 className={S.title}>
                        O que nossos clientes dizem.
                    </h1>
                    <p className={S.description}>
                        Conheça as experiências reais de empresas que transformaram seus resultados com nossas soluções financeiras inovadoras e personalizadas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReviewsHeader;
