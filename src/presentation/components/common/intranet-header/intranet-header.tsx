import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import S from './intranet-header.module.scss';

const IntranetHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <div className={S.centeredContent}>
                    <div className={S.badge}>
                        CONTA CORRENTE EMPRESARIAL
                    </div>
                    <h1 className={S.title}>
                        Obtenha mais pelo seu dinheiro sem taxas mensais.
                    </h1>
                    <p className={S.description}>
                        Cansado de pagar juros altos com tarifas bancárias? Ganhe mais e pague menos com a Bluevine — nossos clientes mais ativos economizam até US$ 500 por ano.¹
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntranetHeader;
