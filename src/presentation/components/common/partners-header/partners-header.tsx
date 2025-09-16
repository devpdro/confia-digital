import React from 'react';
import S from './partners-header.module.scss';
import { Button } from '../../form';

interface PartnersHeaderProps {
    className?: string;
}

const PartnersHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.header} ${className || ''}`}>
            <div className={S.wrapper}>
                <div className={S.centeredContent}>
                    <div className={S.badge}>
                        PARCEIROS
                    </div>
                    <h1 className={S.title}>
                        Seja nosso parceiro de sucesso.
                    </h1>
                    <p className={S.description}>
                        Junte-se à nossa rede de parceiros e ofereça soluções inovadoras de securitização aos seus clientes. Cresça conosco no mercado de capitais.
                    </p>
                    <Button
                        typeStyle="btn1"
                        label="Quero ser parceiro"
                        size="md"
                        width="220px"
                    />
                </div>
            </div>
        </section>
    );
};

export default PartnersHeader;