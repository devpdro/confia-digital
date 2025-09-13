import React from 'react';
import S from './partners-header.module.scss';

interface PartnersHeaderProps {
    className?: string;
}

const PartnersHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <h1 className={S.title}>Parceria com a Bluevine.</h1>
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

export default PartnersHeader;