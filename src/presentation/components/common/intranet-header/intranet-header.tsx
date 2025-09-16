import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import S from './intranet-header.module.scss';

const IntranetHeader = () => {
    const scrollToPlatforms = () => {
        const platformsSection = document.querySelector('[data-section="intranet-platforms"]');
        if (platformsSection) {
            platformsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.centeredContent}>
                    <div className={S.badge}>
                        PORTAL DO CLIENTE
                    </div>
                    <h1 className={S.title}>
                        Acesse suas ferramentas de trabalho.
                    </h1>
                    <p className={S.description}>
                        Centralize o acesso às suas plataformas essenciais. Webmail corporativo, sistema de gestão e ferramentas de investimento em um só lugar para otimizar sua produtividade.
                    </p>
                    
                    <div className={S.linkInfo} onClick={scrollToPlatforms} style={{ cursor: 'pointer' }}>
                        <p>Acesse suas plataformas abaixo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntranetHeader;
