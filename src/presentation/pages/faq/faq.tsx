import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Meta } from 'src/presentation/components';
import S from './faq.module.scss';

const Faq = () => {
    const [activeCategory, setActiveCategory] = useState('geral');
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (itemId: string) => {
        const isCurrentlyOpen = expandedItems.includes(itemId);
        
        setExpandedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );

        // Scroll suave para a pergunta apenas quando estiver abrindo
        if (!isCurrentlyOpen) {
            setTimeout(() => {
                const element = document.getElementById(`faq-item-${itemId}`);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest'
                    });
                }
            }, 100);
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['geral', 'conta-digital', 'securitizacao', 'estruturacao-customizada', 'antecipacao', 'parcerias', 'intranet'];
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
        { id: 'geral', name: 'Geral' },
        { id: 'conta-digital', name: 'Conta Digital HotInvest' },
        { id: 'securitizacao', name: 'Securitização de Recebíveis' },
        { id: 'estruturacao-customizada', name: 'Estruturação Customizada' },
        { id: 'antecipacao', name: 'Antecipação de Contratos' },
        { id: 'parcerias', name: 'Parcerias e Comissões' },
        { id: 'intranet', name: 'Intranet e Plataformas' }
    ];

    const faqData = {
        geral: [
            {
                id: 'o-que-e-confia',
                question: 'O que é a Confia Capital?',
                answer: 'A Confia Capital é uma securitizadora autorizada pela CVM que transforma recebíveis em liquidez imediata para empresas. Oferecemos também o HotInvest, banco digital gratuito com investimentos automáticos que rendem 150% acima da poupança.'
            },
            {
                id: 'servicos-oferecidos',
                question: 'Quais serviços a Confia Capital oferece?',
                answer: 'Oferecemos securitização de recebíveis (CRI/CRA), antecipação de contratos, conta digital gratuita HotInvest, programa de parcerias, intranet para clientes e soluções completas de liquidez empresarial.'
            },
            {
                id: 'diferencial-mercado',
                question: 'Qual o diferencial da Confia Capital no mercado?',
                answer: 'Somos a única securitizadora que combina tecnologia avançada, processos 100% digitais, taxas competitivas e um banco digital integrado. Transformamos recebíveis em liquidez em até 48h com total transparência.'
            },
            {
                id: 'seguranca-regulamentacao',
                question: 'A Confia Capital é regulamentada?',
                answer: 'Sim, somos uma securitizadora autorizada pela CVM (Comissão de Valores Mobiliários) e o HotInvest é regulamentado pelo Banco Central. Seguimos todas as normas de segurança e compliance do mercado financeiro.'
            },
            {
                id: 'como-comecar',
                question: 'Como começar a usar os serviços da Confia Capital?',
                answer: 'É simples: acesse nosso site, solicite uma proposta ou abra sua conta HotInvest. Nossa equipe analisa seu perfil e oferece as melhores soluções para suas necessidades de liquidez e investimento.'
            }
        ],
        'conta-digital': [
            {
                id: 'conta-gratuita',
                question: 'A conta HotInvest é realmente gratuita?',
                answer: '100% gratuita! Zero taxa de manutenção, zero anuidade do cartão, transferências e PIX gratuitos 24h. Não cobramos nada que os bancos tradicionais cobram. Seu dinheiro ainda rende automaticamente 150% acima da poupança.'
            },
            {
                id: 'rendimento-automatico',
                question: 'Como funciona o rendimento automático?',
                answer: 'Seu saldo rende automaticamente todos os dias, sem você fazer nada. O rendimento é 150% superior à poupança, com liquidez diária. Não precisa aplicar ou resgatar - o dinheiro fica disponível e rendendo simultaneamente.'
            },
            {
                id: 'abrir-conta-hotinvest',
                question: 'Como abrir minha conta no HotInvest?',
                answer: 'Super simples! Baixe o app, toque em "Criar conta", preencha seus dados pessoais, escolha seu tipo de conta e pronto! Sua conta fica ativa em poucos minutos, sem burocracia ou análise de crédito.'
            },
            {
                id: 'cartao-sem-anuidade',
                question: 'O cartão HotInvest tem anuidade?',
                answer: 'Não! Cartão de débito e crédito sem anuidade para sempre. Ainda ganha cashback real nas compras e controla tudo pelo app. Sem taxas escondidas, sem surpresas no final do mês.'
            },
            {
                id: 'pix-24h',
                question: 'O PIX funciona 24 horas mesmo?',
                answer: 'Sim! PIX gratuito 24h, 7 dias por semana. Transfere na madrugada, no feriado, no domingo. Sem limite de horário, sem burocracia, sem enrolação. PIX instantâneo de verdade.'
            }
        ],
        securitizacao: [
            {
                id: 'o-que-e-securitizacao',
                question: 'O que é securitização de recebíveis?',
                answer: 'É transformar seus recebíveis futuros em dinheiro hoje. Antecipamos contratos, notas fiscais e outros direitos creditórios com taxas competitivas. Você recebe o valor à vista e nós aguardamos o vencimento dos títulos.'
            },
            {
                id: 'tipos-recebiveis',
                question: 'Quais tipos de recebíveis podem ser securitizados?',
                answer: 'Antecipamos contratos de prestação de serviços, mensalidades de software, contratos de manutenção, marketing, governamentais e diversos outros. Avaliamos cada caso para oferecer a melhor solução de liquidez.'
            },
            {
                id: 'prazo-liberacao',
                question: 'Qual o prazo para liberação dos recursos?',
                answer: 'Após aprovação da documentação, liberamos os recursos em até 48 horas. Nosso processo é 100% digital e otimizado para máxima agilidade, sem burocracia desnecessária.'
            },
            {
                id: 'valor-minimo-securitizacao',
                question: 'Qual o valor mínimo para securitização?',
                answer: 'Trabalhamos com operações a partir de R$ 100.000. Para valores menores, oferecemos antecipação de recebíveis com condições especiais através de nossos produtos alternativos.'
            },
            {
                id: 'documentos-necessarios',
                question: 'Quais documentos preciso para securitizar?',
                answer: 'Documentos da empresa (CNPJ, contrato social), comprovantes dos recebíveis (contratos, notas fiscais), demonstrações financeiras e documentos dos sócios. Nossa equipe orienta todo o processo.'
            }
        ],
        parcerias: [
            {
                id: 'como-ser-parceiro',
                question: 'Como me tornar parceiro da Confia Capital?',
                answer: 'Para se tornar nosso parceiro, você precisa ter CNPJ ativo, experiência no mercado financeiro ou relacionamento com empresas que precisam de capital. Após o cadastro, nossa equipe avalia o perfil e libera o acesso à plataforma de parceiros.'
            },
            {
                id: 'estrutura-comissoes',
                question: 'Qual é a estrutura de comissões para parceiros?',
                answer: 'Oferecemos comissões competitivas que variam de 0,5% a 2% sobre o valor das operações estruturadas, dependendo do volume mensal e tipo de cliente. Parceiros com maior volume têm acesso a bônus adicionais e condições especiais.'
            },
            {
                id: 'conhecimento-tecnico',
                question: 'Preciso ter conhecimento técnico em securitização?',
                answer: 'Não é obrigatório. Fornecemos treinamento completo sobre securitização, materiais técnicos e suporte especializado. Nossa equipe acompanha você em todas as etapas até que se sinta confortável para atuar de forma independente.'
            },
            {
                id: 'valor-minimo-comissao',
                question: 'Qual o valor mínimo de operação para gerar comissão?',
                answer: 'Operações a partir de R$ 50.000 já geram comissão para parceiros. Temos uma estrutura progressiva que premia o volume e a qualidade das indicações, com bônus especiais para grandes operações.'
            },
            {
                id: 'suporte-parceiros',
                question: 'Que tipo de suporte vocês oferecem aos parceiros?',
                answer: 'Oferecemos treinamento inicial, materiais de apoio, plataforma exclusiva para acompanhamento, suporte técnico dedicado e reuniões periódicas para alinhamento de estratégias e melhores práticas.'
            }
        ],
        intranet: [
            {
                id: 'acesso-intranet',
                question: 'Como acessar a intranet da Confia Capital?',
                answer: 'Clientes ativos recebem credenciais de acesso por email após a primeira operação. A intranet permite acompanhar operações em tempo real, baixar relatórios e acessar documentos importantes de forma segura.'
            },
            {
                id: 'funcionalidades-intranet',
                question: 'Quais funcionalidades estão disponíveis na intranet?',
                answer: 'Acompanhamento de operações, relatórios de performance, gestão de recebíveis, histórico de transações, documentos contratuais, calendário de vencimentos e comunicação direta com nossa equipe.'
            },
            {
                id: 'plataformas-integradas',
                question: 'Quais plataformas estão integradas na intranet?',
                answer: 'Temos integração com sistemas de gestão empresarial, plataformas de pagamento, bancos digitais e ferramentas de análise financeira. Tudo centralizado para facilitar sua gestão diária.'
            },
            {
                id: 'seguranca-intranet',
                question: 'A intranet é segura?',
                answer: 'Sim! Utilizamos criptografia de ponta a ponta, autenticação de dois fatores, monitoramento 24/7 e backup automático. Todos os dados são protegidos conforme normas da LGPD e regulamentações financeiras.'
            },
            {
                id: 'suporte-tecnico-intranet',
                question: 'Há suporte técnico para a intranet?',
                answer: 'Oferecemos suporte técnico especializado via chat, email e telefone. Nossa equipe está disponível para resolver dúvidas, orientar sobre funcionalidades e garantir a melhor experiência na plataforma.'
            }
        ],
        'estruturacao-customizada': [
            {
                id: 'o-que-e-estruturacao',
                question: 'O que é estruturação customizada de operações?',
                answer: 'É o desenvolvimento de soluções financeiras sob medida para necessidades específicas da sua empresa. Criamos estruturas únicas de CRI/CRA que se adaptam perfeitamente ao seu fluxo de recebíveis e objetivos de liquidez.'
            },
            {
                id: 'diferenca-estruturacao-padrao',
                question: 'Qual a diferença entre estruturação customizada e padrão?',
                answer: 'A estruturação padrão segue modelos pré-definidos, enquanto a customizada é desenvolvida especificamente para seu negócio. Analisamos seu perfil, recebíveis e necessidades para criar uma solução única e otimizada.'
            },
            {
                id: 'prazo-estruturacao-customizada',
                question: 'Qual o prazo para desenvolver uma estruturação customizada?',
                answer: 'O prazo varia de 15 a 45 dias, dependendo da complexidade da operação. Nosso time trabalha de forma ágil para entregar a estrutura ideal sem comprometer a qualidade e compliance necessários.'
            },
            {
                id: 'valor-minimo-customizada',
                question: 'Qual o valor mínimo para estruturação customizada?',
                answer: 'Trabalhamos com operações customizadas a partir de R$ 500.000. Para valores menores, oferecemos nossas soluções padronizadas que também são altamente eficientes e competitivas.'
            },
            {
                id: 'vantagens-estruturacao-customizada',
                question: 'Quais as vantagens da estruturação customizada?',
                answer: 'Taxas otimizadas para seu perfil, prazos flexíveis, estrutura jurídica adequada ao seu negócio, maior eficiência fiscal e condições que se adaptam perfeitamente ao seu fluxo de caixa e necessidades específicas.'
            }
        ],
        antecipacao: [
            {
                id: 'como-funciona-antecipacao',
                question: 'Como funciona a antecipação de contratos?',
                answer: 'Antecipamos o valor dos seus contratos futuros com desconto competitivo. Você recebe o dinheiro hoje e nós aguardamos o vencimento natural dos contratos. Processo 100% digital e sem burocracia.'
            },
            {
                id: 'tipos-contratos-antecipacao',
                question: 'Quais tipos de contratos podem ser antecipados?',
                answer: 'Antecipamos contratos de prestação de serviços, software, manutenção, marketing digital, consultorias, contratos governamentais e diversos outros. Avaliamos cada caso individualmente.'
            },
            {
                id: 'prazo-antecipacao-contratos',
                question: 'Qual o prazo para antecipação de contratos?',
                answer: 'Após análise e aprovação da documentação, liberamos os recursos em até 24 horas. Nossa análise é rápida e eficiente, focada em agilidade sem comprometer a segurança da operação.'
            },
            {
                id: 'percentual-antecipacao',
                question: 'Qual percentual do contrato pode ser antecipado?',
                answer: 'Antecipamos até 85% do valor do contrato, dependendo do perfil do pagador, prazo de vencimento e histórico de relacionamento. Oferecemos as melhores condições do mercado para maximizar sua liquidez.'
            },
            {
                id: 'documentos-antecipacao-contratos',
                question: 'Quais documentos preciso para antecipar contratos?',
                answer: 'Contrato assinado, documentos da empresa contratante, comprovante de entrega/prestação do serviço, documentos da sua empresa e dados bancários. Nossa equipe orienta todo o processo.'
            }
        ]
    };

    const allFaqs = [
        ...faqData.geral,
        ...faqData['conta-digital'],
        ...faqData.securitizacao,
        ...faqData['estruturacao-customizada'],
        ...faqData.antecipacao,
        ...faqData.parcerias,
        ...faqData.intranet
    ];

    return (
        <div className={S.page}>
            <Meta
                title="Perguntas Frequentes | Confia Capital - Tire suas dúvidas"
                description="Encontre respostas para as principais dúvidas sobre securitização, conta digital HotInvest, parcerias e nossos serviços financeiros. Suporte completo para empresas."
                keywords="perguntas frequentes, FAQ, dúvidas securitização, conta digital, HotInvest, parcerias, CRI CRA, recebíveis, suporte financeiro, Confia Capital"
                image="https://confiacapital.com.br/og-faq.png"
            />
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
                    <section id="geral" className={S.faqSection}>
                        <h2 className={S.contentTitle}>Geral</h2>
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
                         
                         <button 
                             className={S.backToTop}
                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                         >
                             <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                             </svg>
                             Voltar ao topo
                         </button>
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
                         
                         <button 
                             className={S.backToTop}
                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                         >
                             <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                             </svg>
                             Voltar ao topo
                         </button>
                            </section>
                        );
                    })}
                </main>
            </div>
        </div>
    );
};

export default Faq;