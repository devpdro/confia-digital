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

    // Features do aplicativo
    const appFeatures = [
        {
            id: "feature-1",
            header: "CARACTERÍSTICAS",
            title: "recursos poderosos",
            subtitle: "Gestão completa da sua conta digital",
            description: "Tenha controle total sobre sua conta bancária na palma da mão. Visualize extratos, acompanhe transações em tempo real e gerencie seus recebíveis de forma simples e intuitiva.",
            ctaLabel: "Comece agora",
            ctaLink: "/solicitar-proposta"
        },
        {
            id: "feature-2",
            header: "FUNCIONALIDADES",
            title: "antecipação inteligente",
            subtitle: "Antecipe seus recebíveis com facilidade",
            description: "Antecipe seus recebíveis de forma rápida e segura diretamente pelo aplicativo. Acompanhe o status das operações, receba notificações importantes e otimize o fluxo de caixa da sua empresa.",
            ctaLabel: "Saiba mais",
            ctaLink: "/antecipacao-de-recebiveis"
        },
        {
            id: "feature-3",
            header: "SEGURANÇA",
            title: "proteção avançada",
            subtitle: "Seus dados e transações protegidos",
            description: "Utilizamos criptografia de ponta a ponta, autenticação de dois fatores e biometria para garantir máxima segurança. Seus dados e transações estão sempre protegidos com os mais altos padrões bancários.",
            ctaLabel: "Conheça mais",
            ctaLink: "/sobre-nos"
        }
    ];

    // Perguntas frequentes sobre o app
    const faqItems = [
        {
            id: "app-1",
            question: "Como faço para baixar o aplicativo do banco Confia Capital?",
            answer: "O aplicativo do banco Confia Capital está disponível na App Store para dispositivos iOS. Basta acessar a App Store, buscar por 'Confia Capital' e clicar em 'Baixar'. O download é gratuito e o aplicativo está disponível para todos os clientes do banco."
        },
        {
            id: "app-2",
            question: "O aplicativo é gratuito?",
            answer: "Sim, o aplicativo do banco Confia Capital é totalmente gratuito para download e uso. Não há custos adicionais para utilizar as funcionalidades bancárias disponíveis no app."
        },
        {
            id: "app-3",
            question: "Quais funcionalidades bancárias estão disponíveis no aplicativo?",
            answer: "O aplicativo do banco Confia Capital oferece todas as funcionalidades de um banco digital completo, incluindo: gestão de conta digital, acompanhamento de operações em tempo real, antecipação de recebíveis, visualização de extratos, histórico completo de transações, notificações importantes sobre sua conta e muito mais."
        },
        {
            id: "app-4",
            question: "Preciso ter conta no banco Confia Capital para usar o app?",
            answer: "Sim, o aplicativo é destinado aos clientes do banco Confia Capital. Para acessar o app, você precisa ter uma conta digital ativa conosco. Se ainda não é cliente, entre em contato conosco para abrir sua conta e conhecer nossos serviços bancários."
        },
        {
            id: "app-5",
            question: "O aplicativo está disponível para Android?",
            answer: "Atualmente, o aplicativo do banco Confia Capital está disponível apenas para dispositivos iOS (iPhone e iPad). Estamos trabalhando para lançar a versão Android em breve. Fique atento às nossas redes sociais para novidades."
        },
        {
            id: "app-6",
            question: "Como faço login no aplicativo?",
            answer: "Para fazer login no aplicativo, utilize as mesmas credenciais da sua conta digital no banco Confia Capital. Se você ainda não possui uma conta ou esqueceu suas credenciais, entre em contato com nosso suporte através do site ou telefone."
        },
        {
            id: "app-7",
            question: "O aplicativo é seguro?",
            answer: "Sim, a segurança é uma prioridade absoluta para o banco Confia Capital. O aplicativo utiliza criptografia de ponta a ponta, todas as transações são protegidas e seguimos os mais altos padrões de segurança bancária. Além disso, implementamos autenticação de dois fatores, biometria e outras medidas avançadas de segurança para proteger seus dados e seu dinheiro."
        },
        {
            id: "app-8",
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
                                <img src={IMAGE.LOGO.src} alt="Confia Capital" className={S.logoImage} />
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
                            O aplicativo do banco Confia Capital coloca todas as funcionalidades bancárias no seu celular. Gerencie sua conta digital, acompanhe operações em tempo real, antecipe recebíveis e muito mais, tudo de forma simples, rápida e segura.
                        </motion.p>

                        <motion.div
                            className={S.downloadButton}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="#"
                                className={S.appStoreButton}
                                onClick={(e) => e.preventDefault()}
                            >
                                <img src={IMAGE.APP_STORE.src} alt="Download na App Store" />
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
                        {Array.from({ length: iphoneCount }).map((_, index) => {
                            // Calcula a posição inicial da escada (meio mais alto)
                            // Índice 0 e 4: mais baixo (offset positivo = 120px) - começam mais baixos
                            // Índice 1 e 3: meio (offset positivo = 60px) - começam no meio
                            // Índice 2: mais alto (offset = 0px) - já está no topo
                            const initialOffset = index === 2 ? 0 : index < 2 ? (2 - index) * 60 : (index - 2) * 60;

                            // Transforma o scroll progress em offset Y
                            // Quando scrollProgress = 0: escada completa (valores iniciais positivos = mockups mais baixos)
                            // Quando scrollProgress = 1: todos nivelados (todos em 0) - mockups mais baixos SOBEM para se alinhar
                            const yOffset = useTransform(
                                scrollYProgress,
                                [0, 1],
                                [initialOffset, 0]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    className={S.phoneWrapper}
                                    style={{ y: yOffset }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.6 + index * 0.1,
                                    }}
                                >
                                    <Iphone alt={`Mockup iPhone ${index + 1}`} />
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
