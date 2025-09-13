import S from './minimum-requirements.module.scss';

const MinimumRequirements = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Como se tornar um sócio de contabilidade.
                    </h2>
                    
                    <div className={S.steps}>
                        <div className={S.step}>
                            <div className={S.stepNumber}>1</div>
                            <h3 className={S.stepTitle}>Cadastre-se no nosso painel de contabilidade</h3>
                            <p className={S.stepDescription}>
                                Preencha os dados básicos, envie sua documentação e aguarde nossa análise para liberação do acesso.
                            </p>
                        </div>
                        
                        <div className={S.step}>
                            <div className={S.stepNumber}>2</div>
                            <h3 className={S.stepTitle}>Conheça seu gerente de parceiros</h3>
                            <p className={S.stepDescription}>
                                Receba uma apresentação completa sobre nossos produtos e tire todas suas dúvidas.
                            </p>
                        </div>
                        
                        <div className={S.step}>
                            <div className={S.stepNumber}>3</div>
                            <h3 className={S.stepTitle}>Indique seu primeiro cliente</h3>
                            <p className={S.stepDescription}>
                                Comece a gerar receita indicando clientes que precisam de soluções de crédito empresarial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinimumRequirements;