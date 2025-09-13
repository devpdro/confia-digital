import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import S from './faq.module.scss';

const Faq = () => {
    const [activeCategory, setActiveCategory] = useState('conta-corrente');
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (itemId: string) => {
        setExpandedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['conta-corrente', 'emprestimos', 'cartao', 'seguranca'];
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveCategory(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'conta-corrente', name: 'Conta corrente empresarial' },
        { id: 'emprestimos', name: 'Empréstimos empresariais' },
        { id: 'cartao', name: 'Cartão de crédito' },
        { id: 'seguranca', name: 'Segurança' }
    ];

    const faqData = {
        geral: [
            {
                id: 'o-que-e-bluevine',
                question: 'O que é Bluevine?',
                answer: 'A Bluevine é uma plataforma financeira poderosa e segura, desenvolvida especificamente para o sucesso empresarial. Através de um conjunto crescente de soluções de conta corrente empresarial, empréstimos e crédito, oferecemos aos proprietários de empresas as ferramentas financeiras necessárias para administrar seus negócios de forma eficiente e crescer em seus próprios termos.'
            },
            {
                id: 'bluevine-e-banco',
                question: 'O Bluevine é um banco?',
                answer: 'A Bluevine é uma empresa de tecnologia financeira, não um banco. Nossos serviços bancários são fornecidos pelo Coastal Community Bank, Membro FDIC. A Linha de Crédito Bluevine é emitida pelo Celtic Bank. Ser uma empresa fintech nos permite cobrar taxas menores e mais baixas, e tornar nossos serviços financeiros mais acessíveis aos proprietários de empresas novas, pequenas ou geograficamente remotas.'
            },
            {
                id: 'quantas-empresas',
                question: 'Quantas empresas usam o Bluevine?',
                answer: 'Tendo atendido 750.000 empresas em todo o Brasil desde o lançamento, a Bluevine é confiável com mais de R$ 8 bilhões em depósitos gerenciados de clientes e mais de R$ 80 bilhões em empréstimos entregues.'
            },
            {
                id: 'empresa-pequena-grande',
                question: 'Minha empresa é muito pequena ou muito grande para usar o Bluevine?',
                answer: 'Não, a Bluevine pode ser uma excelente plataforma bancária para empresas de todos os tamanhos. Na verdade, a Conta Corrente Empresarial Bluevine oferece múltiplos planos que podem ser adequados para você, cada um com a oportunidade de ganhar juros de alto rendimento e economizar em taxas de pagamento, juntamente com o suporte e segurança necessários para operar com confiança.'
            },
            {
                id: 'enviar-dinheiro-zelle',
                question: 'Posso enviar dinheiro com o Zelle?',
                answer: 'Não, a Bluevine não está atualmente integrada com o Zelle. O Zelle é de propriedade e operado pela Early Warning Services (EWS), uma empresa de propriedade de um grupo de grandes bancos brasileiros. Embora o Zelle possa ser uma ferramenta útil para clientes desses bancos tradicionais, o serviço não foi disponibilizado para clientes de empresas de tecnologia financeira como a Bluevine. No entanto, você ainda tem muitas opções para enviar e receber dinheiro com a Conta Corrente Empresarial Bluevine.'
            }
        ],
        'conta-corrente': [
            {
                id: 'o-que-oferece',
                question: 'O que a Bluevine Business Checking oferece?',
                answer: 'Com a Conta Corrente Empresarial Bluevine, desfrute de taxas mensais zero, sem taxas de cheque especial, sem taxas de transferência ACH ou wire domésticas recebidas, sem taxas de ATM da rede, sem requisitos de saldo mínimo, transações ilimitadas e talões de cheque gratuitos, além de suporte ao vivo dedicado de nossa equipe. Além disso, clientes elegíveis podem ganhar até 3,7% APY com um de nossos planos de conta corrente empresarial.'
            },
            {
                id: 'ganhar-juros',
                question: 'Como posso ganhar juros sobre meus saldos da conta Bluevine Business Checking?',
                answer: 'Clientes elegíveis podem ganhar até 3,7% de rendimento percentual anual (APY) em seus saldos de conta corrente. Com nosso plano Standard, você pode ganhar 1,5% APY em saldos de até R$ 1.250.000 quando atender a um dos seguintes requisitos mensais de elegibilidade: Gaste R$ 2.500 por mês com seu Cartão de Débito Empresarial Bluevine Mastercard® e/ou Cartão Empresarial Bluevine Cashback Mastercard OU Receba ou deposite R$ 12.500 por mês em pagamentos de clientes em sua conta corrente Bluevine ou subcontas.'
            },
            {
                id: 'como-calculados-juros',
                question: 'Como os juros são calculados?',
                answer: 'Calculamos juros simples diariamente e os creditamos em sua conta mensalmente. O APY é calculado com base no ano civil. Pagamos juros apenas em centavos inteiros, então qualquer juro que seja uma fração de um centavo será arredondado para cima ou para baixo para o centavo mais próximo.'
            },
            {
                id: 'taxa-valor-minimo',
                question: 'Há alguma taxa ou valor mínimo?',
                answer: 'Não há taxas mensais, taxas de manutenção ou requisitos de saldo mínimo para manter sua conta Bluevine Business Checking. Também não cobramos taxas por transferências ACH recebidas, wires domésticos recebidos ou uso de ATMs da nossa rede.'
            },
            {
                id: 'solicitar-conta',
                question: 'O que preciso para solicitar uma conta corrente empresarial Bluevine?',
                answer: 'Para abrir uma conta, você precisará fornecer informações básicas sobre sua empresa, incluindo CNPJ, documentos de constituição, comprovante de endereço comercial e documentos pessoais dos sócios. O processo é 100% digital e pode ser concluído em poucos minutos.'
            },
            {
                id: 'quem-pode-obter',
                question: 'Quem pode obter uma conta corrente empresarial Bluevine?',
                answer: 'Empresas brasileiras legalmente constituídas, incluindo MEI, LTDA, SA e outras modalidades empresariais. Avaliamos cada solicitação individualmente, considerando o perfil da empresa e histórico comercial.'
            },
            {
                id: 'enviar-receber-dinheiro',
                question: 'Como faço para enviar e receber dinheiro em uma conta corrente empresarial da Bluevine?',
                answer: 'Você pode enviar dinheiro através de PIX, TED, DOC, transferências ACH e wire transfers. Para receber, aceite PIX, transferências bancárias, depósitos em cheque e pagamentos de cartão. Todas as operações podem ser realizadas através do nosso app ou internet banking.'
            },
            {
                id: 'depositar-dinheiro-cheques',
                question: 'Posso depositar dinheiro ou cheques?',
                answer: 'Sim, você pode fazer depósitos em dinheiro em agências parceiras e caixas eletrônicos da rede. Para cheques, oferecemos depósito móvel através do app, onde você fotografa o cheque para processamento automático.'
            },
            {
                id: 'tempo-fundos-disponiveis',
                question: 'Quanto tempo demora para meus fundos ficarem disponíveis depois que eu deposito um cheque?',
                answer: 'Depósitos de cheques via app móvel ficam disponíveis em até 1 dia útil para valores até R$ 10.000. Para valores maiores, o prazo pode ser de até 2 dias úteis. PIX e transferências eletrônicas são processados instantaneamente.'
            }
        ],
        emprestimos: [
            {
                id: 'tipos-emprestimos',
                question: 'Que tipos de empréstimos a Bluevine oferece?',
                answer: 'A Bluevine oferece linhas de crédito empresariais flexíveis, empréstimos a prazo e antecipação de recebíveis. Nossas soluções são projetadas para atender às diversas necessidades de capital de giro das empresas, desde financiamento de estoque até expansão de negócios.'
            },
            {
                id: 'requisitos-emprestimo',
                question: 'Quais são os requisitos para obter um empréstimo?',
                answer: 'Os requisitos básicos incluem: empresa em operação há pelo menos 6 meses, faturamento mínimo mensal, documentação empresarial atualizada e boa situação creditícia. Cada produto tem critérios específicos que são avaliados durante o processo de análise.'
            }
        ],
        cartao: [
            {
                id: 'cartao-credito-disponivel',
                question: 'A Bluevine oferece cartão de crédito empresarial?',
                answer: 'Sim, oferecemos o Cartão Empresarial Bluevine Cashback Mastercard com cashback em todas as compras, sem anuidade e limites competitivos. O cartão é integrado à sua conta corrente empresarial para facilitar o controle financeiro.'
            },
            {
                id: 'beneficios-cartao',
                question: 'Quais são os benefícios do cartão Bluevine?',
                answer: 'O cartão oferece cashback de até 2% em todas as compras, sem anuidade, programa de recompensas, controle de gastos em tempo real através do app, e integração completa com sua conta corrente empresarial Bluevine.'
            }
        ],
        seguranca: [
            {
                id: 'seguranca-conta',
                question: 'Como a Bluevine protege minha conta?',
                answer: 'Utilizamos criptografia de nível bancário, autenticação de dois fatores, monitoramento 24/7 de transações suspeitas e seguimos todos os protocolos de segurança exigidos pelos órgãos reguladores. Seus depósitos são protegidos pelo FDIC até R$ 15.000.000 por depositante.'
            },
            {
                id: 'protecao-fraude',
                question: 'Que proteções contra fraude vocês oferecem?',
                answer: 'Oferecemos monitoramento em tempo real de transações, alertas instantâneos por SMS e email, bloqueio imediato de cartões suspeitos, e uma equipe dedicada de prevenção à fraude disponível 24/7 para resolver qualquer problema de segurança.'
            }
        ]
    };

    const allFaqs = [
        ...faqData.geral,
        ...faqData['conta-corrente'],
        ...faqData.emprestimos,
        ...faqData.cartao,
        ...faqData.seguranca
    ];

    return (
        <div className={S.page}>
            <div className={S.container}>
                <aside className={S.sidebar}>
                    <h2 className={S.sidebarTitle}>Perguntas frequentes</h2>
                    <ul className={S.categoryList}>
                        {categories.map(category => (
                            <li key={category.id} className={S.categoryItem}>
                                <button
                                    className={`${S.categoryLink} ${activeCategory === category.id ? S.active : ''}`}
                                    onClick={() => scrollToSection(category.id)}
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className={S.content}>
                    {/* Seção Em Geral */}
                    <section className={S.faqSection}>
                        {faqData.geral.map(faq => (
                            <div 
                                key={faq.id} 
                                id={`faq-item-${faq.id}`}
                                className={`${S.faqItem} ${expandedItems.includes(faq.id) ? S.faqItemOpen : ''}`}
                            >
                                <button
                                    className={S.faqQuestion}
                                    onClick={() => toggleItem(faq.id)}
                                    aria-expanded={expandedItems.includes(faq.id)}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <span className={S.questionText}>{faq.question}</span>
                                    <motion.div 
                                        className={`${S.icon} ${expandedItems.includes(faq.id) ? S.iconOpen : ''}`}
                                        animate={{ 
                                            rotate: expandedItems.includes(faq.id) ? 45 : 0,
                                            color: expandedItems.includes(faq.id) ? '#264f85' : '#264f85',
                                            scale: expandedItems.includes(faq.id) ? 1.1 : 1
                                        }}
                                        transition={{ 
                                            duration: 0.25, 
                                            ease: [0.4, 0, 0.2, 1] 
                                        }}
                                    >
                                        +
                                    </motion.div>
                                </button>
                                
                                <AnimatePresence>
                                    {expandedItems.includes(faq.id) && (
                                        <motion.div 
                                            id={`faq-answer-${faq.id}`}
                                            className={S.faqAnswer}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ 
                                                height: 'auto', 
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                                                    opacity: { duration: 0.25, delay: 0.1 }
                                                }
                                            }}
                                            exit={{ 
                                                height: 0, 
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            style={{ overflow: 'hidden' }}
                                            aria-hidden={false}
                                        >
                                            <motion.div 
                                                className={S.answerContent}
                                                initial={{ y: -8, opacity: 0 }}
                                                animate={{ 
                                                    y: 0, 
                                                    opacity: 1,
                                                    transition: { 
                                                        delay: 0.15, 
                                                        duration: 0.25,
                                                        ease: [0.25, 0.46, 0.45, 0.94]
                                                    }
                                                }}
                                                exit={{ 
                                                    y: -8, 
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.15,
                                                        ease: [0.25, 0.46, 0.45, 0.94]
                                                    }
                                                }}
                                            >
                                                <p>{faq.answer}</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                         
                         <a href="#top" className={S.backToTop}>
                             <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                             </svg>
                             Voltar ao topo
                         </a>
                     </section>

                    {/* Seções com títulos */}
                    {categories.map(category => {
                        const categoryFaqs = faqData[category.id as keyof typeof faqData] || [];
                        return (
                            <section key={category.id} id={category.id} className={S.faqSection}>
                                <h2 className={S.contentTitle}>{category.name}</h2>
                                
                                {categoryFaqs.map(faq => (
                                    <div 
                                        key={faq.id} 
                                        id={`faq-item-${faq.id}`}
                                        className={`${S.faqItem} ${expandedItems.includes(faq.id) ? S.faqItemOpen : ''}`}
                                    >
                                        <button
                                            className={S.faqQuestion}
                                            onClick={() => toggleItem(faq.id)}
                                            aria-expanded={expandedItems.includes(faq.id)}
                                            aria-controls={`faq-answer-${faq.id}`}
                                        >
                                            <span className={S.questionText}>{faq.question}</span>
                                            <motion.div 
                                                className={`${S.icon} ${expandedItems.includes(faq.id) ? S.iconOpen : ''}`}
                                                animate={{ 
                                                    rotate: expandedItems.includes(faq.id) ? 45 : 0,
                                                    color: expandedItems.includes(faq.id) ? '#264f85' : '#264f85',
                                                    scale: expandedItems.includes(faq.id) ? 1.1 : 1
                                                }}
                                                transition={{ 
                                                    duration: 0.25, 
                                                    ease: [0.4, 0, 0.2, 1] 
                                                }}
                                            >
                                                +
                                            </motion.div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {expandedItems.includes(faq.id) && (
                                                <motion.div 
                                                    id={`faq-answer-${faq.id}`}
                                                    className={S.faqAnswer}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ 
                                                        height: 'auto', 
                                                        opacity: 1,
                                                        transition: {
                                                            height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                                                            opacity: { duration: 0.25, delay: 0.1 }
                                                        }
                                                    }}
                                                    exit={{ 
                                                        height: 0, 
                                                        opacity: 0,
                                                        transition: {
                                                            height: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                                                            opacity: { duration: 0.2 }
                                                        }
                                                    }}
                                                    style={{ overflow: 'hidden' }}
                                                    aria-hidden={false}
                                                >
                                                    <motion.div 
                                                        className={S.answerContent}
                                                        initial={{ y: -8, opacity: 0 }}
                                                        animate={{ 
                                                            y: 0, 
                                                            opacity: 1,
                                                            transition: { 
                                                                delay: 0.15, 
                                                                duration: 0.25,
                                                                ease: [0.25, 0.46, 0.45, 0.94]
                                                            }
                                                        }}
                                                        exit={{ 
                                                            y: -8, 
                                                            opacity: 0,
                                                            transition: {
                                                                duration: 0.15,
                                                                ease: [0.25, 0.46, 0.45, 0.94]
                                                            }
                                                        }}
                                                    >
                                                        <p>{faq.answer}</p>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                         
                         <a href="#top" className={S.backToTop}>
                             <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                             </svg>
                             Voltar ao topo
                         </a>
                            </section>
                        );
                    })}
                </main>
            </div>
        </div>
    );
};

export default Faq;