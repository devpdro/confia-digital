"use client";

import { Meta, CTA, FAQ, AppFeatures, AppHeader } from "src/presentation/components";
import { IMAGE } from "src/presentation/assets";

import S from './baixe-o-app.module.scss';

const BaixeOApp = () => {

    // Features do aplicativo
    const appFeatures = [
        {
            id: "feature-2",
            header: "CAPITAL DE GIRO",
            title: "gerencie seu capital de giro",
            subtitle: "Controle total do seu capital na palma da mão",
            description: "Gerencie seu capital de giro diretamente pelo aplicativo. Visualize disponibilidade, acompanhe operações em tempo real, solicite novas linhas e tenha controle completo sobre seus recursos financeiros.",
            ctaLabel: "Saiba mais",
            ctaLink: "/capital-de-giro",
            imageSrc: IMAGE.TELA_1_APP.src
        },
        {
            id: "feature-1",
            header: "ACESSO",
            title: "login seguro e rápido",
            subtitle: "Acesse sua conta com segurança",
            description: "Faça login de forma rápida e segura no aplicativo. Utilize biometria, senha ou autenticação de dois fatores para acessar sua conta digital com total proteção dos seus dados.",
            ctaLabel: "Comece agora",
            ctaLink: "/solicitar-proposta",
            imageSrc: IMAGE.LOGIN_IMAGE.src
        },
        {
            id: "feature-3",
            header: "SEGURANÇA",
            title: "proteção avançada",
            subtitle: "Seus dados e transações protegidos",
            description: "Utilizamos criptografia de ponta a ponta, autenticação de dois fatores e biometria para garantir máxima segurança. Seus dados e transações estão sempre protegidos com os mais altos padrões bancários.",
            ctaLabel: "Conheça mais",
            ctaLink: "/sobre-nos",
            imageSrc: IMAGE.TELA_2_APP.src
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
            <AppHeader />
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
