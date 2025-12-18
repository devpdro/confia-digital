"use client";

import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'src/presentation/components';
import S from './under-construction.module.scss';

type UnderConstructionProps = {
    pageName: string;
};

export const UnderConstruction = ({ pageName }: UnderConstructionProps) => {
    const router = useRouter();

    return (
        <section className={S.container}>
            <div className={S.content}>
                <div className={S.imageContainer}>
                    <div
                        className={S.constructionImage}
                        style={{
                            backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        aria-hidden="true"
                    >
                        <h1 className={S.statusCode}>Em Construção</h1>
                    </div>
                </div>

                <div className={S.textContainer}>
                    <h2 className={S.title}>
                        Esta página está em construção
                    </h2>
                    <p className={S.description}>
                        Estamos trabalhando para trazer esta página em breve. 
                        Enquanto isso, explore nossas outras soluções ou entre em contato conosco.
                    </p>

                    <div className={S.buttonContainer}>
                        <Button
                            typeStyle="btn1"
                            label="Voltar para Home"
                            size="md"
                            onClick={() => router.push('/')}
                        />
                        <Button
                            typeStyle="btn2"
                            label="Entrar em Contato"
                            size="md"
                            onClick={() => window.open('https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Digital!', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

