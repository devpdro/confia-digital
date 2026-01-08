"use client";

import { Meta, CTA, Iphone, FAQ, AppFeatures } from "src/presentation/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGE } from "src/presentation/assets";

import S from './baixe-o-app.module.scss';

const BaixeOApp = () => {
    // Array com 5 iPhones vazios (sem imagens por enquanto)
    const iphoneCount = 5;
    const phonesRef = useRef<HTMLDivElement>(null);

    // Configuração do scroll para animação da escada
    const { scrollYProgress } = useScroll({
        target: phonesRef,
        offset: ["start 0.8", "end 0.2"]
    });

    // Cria os transforms para cada iPhone antes do map (hooks devem estar no nível superior)
    // Índice 0 e 4: mais baixo (offset positivo = 120px)
    // Índice 1 e 3: meio (offset positivo = 60px)
    // Índice 2: mais alto (offset = 0px)
    const yOffset0 = useTransform(scrollYProgress, [0, 1], [120, 0]);
    const yOffset1 = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const yOffset2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const yOffset3 = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const yOffset4 = useTransform(scrollYProgress, [0, 1], [120, 0]);
    
    const yOffsets = [yOffset0, yOffset1, yOffset2, yOffset3, yOffset4];

    // Features do aplicativo
    const appFeatures = [
        {
            id: "feature-1",
            header: "CONTA DIGITAL",
            title: "sua conta completa",
            subtitle: "Acesse todas as funcionalidades da sua conta digital",
            description: "Visualize seu saldo, acompanhe transações em tempo real, gerencie seus cartões e tenha controle total sobre sua conta bancária. Tudo isso de forma simples e intuitiva, direto no seu celular.",
            ctaLabel: "Comece agora",
            ctaLink: "/solicitar-proposta",
            imageSrc: IMAGE.CONTA_1.src
        },
        {
            id: "feature-2",
            header: "OPERAÇÕES",
            title: "transações e movimentações",
            subtitle: "Realize operações bancárias com facilidade",
            description: "Faça transferências, pagamentos, PIX e muito mais. Todas as operações bancárias que você precisa estão disponíveis no aplicativo, com segurança e agilidade para gerenciar suas finanças.",
            ctaLabel: "Saiba mais",
            ctaLink: "/capital-de-giro",
            imageSrc: IMAGE.CONTA_2.src
        },
        {
            id: "feature-3",
            header: "HISTÓRICO",
            title: "extratos e relatórios",
            subtitle: "Acompanhe todo o histórico da sua conta",
            description: "Consulte extratos detalhados, visualize histórico de transações, baixe comprovantes e tenha acesso a relatórios completos. Toda a informação que você precisa sobre sua conta está na palma da sua mão.",
            ctaLabel: "Conheça mais",
            ctaLink: "/sobre-nos",
            imageSrc: IMAGE.CONTA_3.src
        }
    ];

    // Perguntas frequentes sobre o app (5 melhores por ordem de impacto)
    const faqItems = [
        {
            id: "app-1",
            question: "Como faço para baixar o aplicativo do banco Confia Capital?",
            answer: "O aplicativo do banco Confia Capital está disponível na App Store para dispositivos iOS. Basta acessar a App Store, buscar por 'Confia Capital' e clicar em 'Baixar'. O download é gratuito e o aplicativo está disponível para todos os clientes do banco."
        },
        {
            id: "app-2",
            question: "O aplicativo é seguro?",
            answer: "Sim, a segurança é uma prioridade absoluta para o banco Confia Capital. O aplicativo utiliza criptografia de ponta a ponta, todas as transações são protegidas e seguimos os mais altos padrões de segurança bancária. Além disso, implementamos autenticação de dois fatores, biometria e outras medidas avançadas de segurança para proteger seus dados e seu dinheiro."
        },
        {
            id: "app-3",
            question: "Quais funcionalidades bancárias estão disponíveis no aplicativo?",
            answer: "O aplicativo do banco Confia Capital oferece todas as funcionalidades de um banco digital completo, incluindo: gestão de conta digital, acompanhamento de operações em tempo real, antecipação de recebíveis, visualização de extratos, histórico completo de transações, notificações importantes sobre sua conta e muito mais."
        },
        {
            id: "app-4",
            question: "O aplicativo é gratuito?",
            answer: "Sim, o aplicativo do banco Confia Capital é totalmente gratuito para download e uso. Não há custos adicionais para utilizar as funcionalidades bancárias disponíveis no app."
        },
        {
            id: "app-5",
            question: "Posso realizar operações bancárias pelo aplicativo?",
            answer: "Sim! O aplicativo do banco Confia Capital permite realizar diversas operações bancárias diretamente pelo celular, incluindo: consultar saldo e extratos, antecipar recebíveis, acompanhar operações em tempo real, receber notificações importantes sobre sua conta e muito mais. Para operações mais complexas ou suporte, nossa equipe está sempre disponível."
        }
    ];

    return (
        <div>
            <Meta
                title="Baixe o App | Confia Capital"
                description="Baixe o aplicativo do banco Confia Capital e tenha seu banco digital na palma da mão. Gerencie sua conta, operações e recebíveis em qualquer lugar."
                keywords="app confia capital, banco digital, aplicativo banco, download app, conta digital, mobile banking"
                image="http://confiacapital.com.br/og-app.png"
            />
            <section className={S.hero}>
                <div className={S.container}>
                    <motion.div
                        className={S.content}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            className={S.logoSection}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <div className={S.logoIcon}>
                                <img src={IMAGE.LOGO_CONFIA_CAPITAL.src} alt="Confia Capital" className={S.logoImage} />
                            </div>
                            <h1 className={S.logoText}>Confia Capital</h1>
                        </motion.div>

                        <motion.h2
                            className={S.tagline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            Seu banco digital na palma da mão
                        </motion.h2>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Acesse sua conta digital, visualize extratos, acompanhe transações e gerencie suas operações bancárias diretamente pelo celular.
                        </motion.p>

                        {/* 
                            Botões de download do aplicativo:
                            - Renderiza dois links clicáveis com os badges oficiais da App Store e Google Play
                            - Ambos os botões têm tamanho visual idêntico (160px de largura, 50px de altura)
                            - Os links abrem em nova aba e redirecionam para as respectivas lojas de aplicativos
                            - As imagens SVG são dimensionadas para ocupar 100% do container, mantendo proporção
                        */}
                        <motion.div
                            className={S.downloadButtons}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <a
                                href="https://apps.apple.com/br/app/confia-capital/id6744622340"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={S.storeButtonApple}
                            >
                                <img src={IMAGE.APP_STORE_BADGE.src} alt="Download na App Store" />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=br.com.hotinvest"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={S.storeButton}
                            >
                                <img src={IMAGE.GOOGLE_PLAY_BADGE.src} alt="Download no Google Play" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={phonesRef}
                        className={S.phonesContainer}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                        {[
                            IMAGE.CONTA_1.src,
                            IMAGE.CONTA_2.src,
                            IMAGE.CONTA_3.src,
                            IMAGE.CONTA_4.src,
                            IMAGE.CONTA_5.src
                        ].map((imageSrc, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className={S.phoneWrapper}
                                    style={{ y: yOffsets[index] }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.6 + index * 0.1,
                                    }}
                                >
                                    <Iphone src={imageSrc} alt={`Tela do app Confia Capital ${index + 1}`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
            <AppFeatures
                title="Recursos do Aplicativo"
                subtitle="Descubra todas as funcionalidades que o banco Confia Capital oferece no seu celular"
                features={appFeatures}
            />
            <FAQ
                title="Perguntas Frequentes sobre o App"
                items={faqItems}
                themeColor="#010553"
            />
            <CTA
                title="Quer saber mais sobre nossos serviços?"
                subtitle="Nossa equipe está pronta para ajudar você."
                buttonLabel="Solicitar proposta"
                buttonLink="/solicitar-proposta"
            />
        </div>
    );
};

export default BaixeOApp;

