import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import { Meta } from 'src/presentation/components';
import S from './data-protection.module.scss';

const DataProtection = () => {
    const [expandedSections, setExpandedSections] = useState<string[]>(['introducao']);

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev => 
            prev.includes(sectionId) 
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };


    const renderSection = (id: string, number: number, title: string, content: React.ReactNode) => {
        const isExpanded = expandedSections.includes(id);
        
        return (
            <section key={id} id={id} className={`${S.section} ${isExpanded ? S.sectionOpen : ''}`}>
                <button
                    className={S.sectionHeader}
                    onClick={() => toggleSection(id)}
                    aria-expanded={isExpanded}
                >
                            <h2 className={S.sectionTitle}>{number}. {title}</h2>
                            <motion.div
                                className={S.chevron}
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IconChevronDown size={20} stroke={2} />
                            </motion.div>
                </button>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className={S.sectionContent}>
                                {content}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        );
    };

    return (
        <div className={S.page}>
            <Meta
                title="Proteção de Dados | Confia Capital"
                description="Política de Privacidade e Proteção de Dados da Confia Capital. Informações sobre coleta, tratamento e proteção de dados pessoais em conformidade com a LGPD."
                keywords="proteção de dados, LGPD, política de privacidade, dados pessoais, Confia Capital, privacidade"
            />
            <div className={S.container}>
                <main className={S.content}>
                    <header className={S.header}>
                        <h1 className={S.title}>Confia Capital Proteção de Dados</h1>
                        <div className={S.headerInfo}>
                            <div className={S.infoItem}>
                                <strong>Área Responsável</strong>
                                <p>DPO Office</p>
                                <p>privacidade@confiacapital.com.br</p>
                            </div>
                            <div className={S.infoItem}>
                                <strong>Segurança da Informação</strong>
                                <p>seguranca@confiacapital.com.br</p>
                            </div>
                            <div className={S.infoItem}>
                                <strong>Aprovação</strong>
                                <p>Diretoria Executiva</p>
                            </div>
                            <div className={S.infoItem}>
                                <strong>Entidade legal</strong>
                                <p>Confia Capital Securitizadora S.A.</p>
                            </div>
                            <div className={S.infoItem}>
                                <strong>Áreas de Relevância e Aplicação</strong>
                                <p>Todas</p>
                            </div>
                            <div className={S.infoItem}>
                                <strong>Data de Aprovação</strong>
                                <p>15 de janeiro de 2024</p>
                            </div>
                        </div>
                    </header>

                    {renderSection('introducao', 1, 'INTRODUÇÃO', (
                        <p className={S.paragraph}>
                            Esta Política de Privacidade (<strong>"Política"</strong>) da Confia Capital Securitizadora S.A. (<strong>"Organização"</strong>) contém informações sobre a coleta, o uso, o processamento e o compartilhamento de dados relacionados à utilização dos serviços da Organização, inclusive por meio de sua plataforma eletrônica (<strong>"Plataforma"</strong>), disponibilizada por meio do endereço eletrônico https://www.confiacapital.com.br/ (<strong>"Site"</strong>) e aplicativo móvel (<strong>"Aplicativo"</strong>).
                        </p>
                    ))}

                    {renderSection('objetivo', 2, 'OBJETIVO', (
                        <p className={S.paragraph}>
                            O objetivo desta Política é estabelecer diretrizes da Organização quanto à coleta, tratamento e armazenamento de dados pessoais, visando sua proteção e garantia da privacidade do Titular, em consonância com as disposições e os princípios da legislação em vigor que orientam o tema.
                        </p>
                    ))}

                    {renderSection('aplicacao', 3, 'APLICAÇÃO', (
                        <p className={S.paragraph}>
                            Esta Política se aplica a todos os processos relativos ao tratamento de dados pessoais, estando sujeita a todas as pessoas que com eles operam no âmbito da Organização.
                        </p>
                    ))}

                    {renderSection('base-normativa', 4, 'BASE NORMATIVA', (
                        <p className={S.paragraph}>
                            Esta Política foi implementada de acordo com as obrigações estipuladas pela Lei no 12.965, de 23 de abril de 2014 (<strong>"MCI"</strong>), pela Lei no 13.709, de 14 de agosto de 2019 (<strong>"LGPD"</strong>), bem como está sujeita às normas definidas pela Autoridade Nacional de Proteção de Dados (<strong>"ANPD"</strong>), reconhecida como autarquia pela Lei no 14.460 de 25 de outubro de 2022, e demais regulamentos em vigor, acerca da coleta, tratamento e proteção de Dados Pessoais.
                        </p>
                    ))}

                    {renderSection('definicoes', 5, 'DEFINIÇÕES', (
                        <>
                            <p className={S.paragraph}>
                                Para os fins desta Política, considera-se:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a) Dado Pessoal:</strong> Qualquer informação que possa ser associada a uma pessoa natural identificada ou identificável, conforme o art. 5o, I, da LGPD, como nome, CPF, RG, CNH, e endereços físicos ou eletrônicos, entre outros.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b) Dados Pessoais Sensíveis:</strong> Dados Pessoais que podem gerar discriminação e, por isso, exigem cuidados extras. Conforme a LGPD, incluem informações sobre origem racial ou étnica, religião, opinião política, filiação a sindicatos ou organizações, saúde, vida sexual, dados genéticos ou biométricos.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c) Titular:</strong> A pessoa a quem se referem os dados pessoais ou sensíveis que estão sendo tratados pela Organização.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(d) Encarregado de Dados Pessoais (DPO):</strong> Pessoa indicada pela Organização para ser o canal de comunicação entre os titulares, a ANPD e demais agentes responsáveis pelo tratamento de dados objeto desta Política.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(e) Endereço de Protocolo de Internet ("Endereço IP"):</strong> o código atribuído definido segundo parâmetros internacionais a um terminal de rede para permitir sua identificação;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(f) Senha:</strong> conjunto de caracteres que pode ser constituído por letras, números, sinais ou símbolos com a finalidade de verificar a identidade do usuário com acesso ao Site;
                            </p>
                        <p className={S.paragraph}>
                            <strong>(g) Site:</strong> página web disponibilizada no endereço https://www.confiacapital.com.br/;
                        </p>
                            <p className={S.paragraph}>
                                <strong>(h) Usuário:</strong> pessoas físicas que utilizarão o Site;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(i) Cookies:</strong> são pequenos arquivos que permitem armazenar e reconhecer dados de navegação;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(j) Cookies de Autenticação:</strong> servem para reconhecer um determinado Usuário, possibilitando o acesso e a utilização do conteúdo restrito do Site e proporcionando experiências de navegação mais personalizadas;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(k) Cookies de Segurança:</strong> são utilizados para ativar recursos de segurança do Site, com a finalidade de auxiliar o monitoramento e/ou detecção de atividades maliciosas ou vedadas, bem como proteger as informações do Usuário contra o acesso por terceiros não autorizados;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(l) Cookies de Pesquisa, Análise e Desempenho:</strong> cookies que têm a finalidade ajudar a entender o desempenho do Site, medir a audiência do Site, verificar os hábitos de navegação dos Usuários no Site, bem como a forma pela qual chegou na página do Site (por exemplo, através de links de outros sites, buscadores ou diretamente pelo endereço).
                            </p>
                        </>
                    ))}

                    {renderSection('motivo-coleta', 6, 'MOTIVO DA COLETA DE DADOS', (
                        <p className={S.paragraph}>
                            A coleta de dados visa permitir a execução dos serviços contratados junto à Organização, a condução ordinária de suas atividades e administração, bem como o acesso a determinado conteúdo do Site em sua área restrita, além do Aplicativo.
                        </p>
                    ))}

                    {renderSection('dados-coletados', 7, 'DADOS COLETADOS', (
                        <>
                            <p className={S.paragraph}>
                                São coletados os seguintes dados pessoais:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a) Via cadastro de usuário:</strong> nome completo, e-mail e CPF;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b) Via Cookies de Autenticação:</strong> Endereço IP, Código ID (IMEI) do aparelho mobile pelo qual o Usuário acessou o Site, informações referentes à data e hora de acesso do Usuário, a partir de um determinado Endereço IP;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c) Via Cookies de Segurança:</strong> localização geográfica, sistema operacional utilizado pelo Usuário, navegador e suas respectivas versões, Endereço IP, Código ID (IMEI) do aparelho mobile pelo qual o Usuário acessou o Site, informações referentes à data e hora de uso do Site por um determinado Usuário, a partir de um determinado Endereço IP;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(d) Via Cookies de Pesquisa, Análise e Desempenho:</strong> localização geográfica, sistema operacional utilizado pelo Usuário, navegador e suas respectivas versões, resolução de tela, Java (linguagem de programação), reprodutor de flash instalado, Endereço IP, Código ID (IMEI) do aparelho mobile pelo qual o Usuário acessou o Site, informações referentes à data e hora de uso do Site por um determinado Usuário, a partir de um determinado Endereço IP, informações referentes às quantidades de cliques e tentativas de uso do Site, bem como de páginas acessadas pelo Usuário;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(e) Via Plataforma:</strong> as informações prestadas pelo Usuário, visando o regular cumprimento do contrato de prestação de serviços celebrado com a Organização. Os Cookies de Autenticação, Segurança e de Pesquisa, Análise e Desempenho não podem ser desabilitados ou rejeitados, a fim de garantir o funcionamento adequado do Site.
                            </p>
                            <p className={S.paragraph}>
                                A Organização não coleta dados pessoais para fins de marketing.
                            </p>
                        </>
                    ))}

                    {renderSection('obrigacoes-usuario', 8, 'OBRIGAÇÕES DO USUÁRIO', (
                        <>
                            <p className={S.paragraph}>
                                <strong>(a)</strong> O login e Senha só poderão ser utilizados pelo Usuário cadastrado, sendo expressamente proibido o compartilhamento de login e/ou Senha com quaisquer terceiros;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b)</strong> O Usuário assume inteira responsabilidade pela guarda, sigilo e boa utilização do login e senhas cadastrados, sendo a Organização isenta de qualquer responsabilidade decorrente do mau uso pelo Usuário;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c)</strong> O Site pode conter links para sites de terceiros, que não estão sujeitos às disposições desta Política de Privacidade. É recomendado que os Usuários consultem as Políticas de Privacidade desses sites de terceiros antes de fornecer qualquer informação pessoal.
                            </p>
                        </>
                    ))}

                    {renderSection('compartilhamento', 9, 'COMPARTILHAMENTO DE DADOS', (
                        <>
                            <p className={S.paragraph}>
                                A Organização poderá compartilhar dados pessoais com terceiros apenas quando necessário para a execução dos serviços contratados, cumprimento de obrigações legais ou regulatórias, ou mediante consentimento do titular, sempre em conformidade com a LGPD e demais normas aplicáveis.
                            </p>
                            <p className={S.paragraph}>
                                Todos os terceiros que acessam dados pessoais estão vinculados por contratos de confidencialidade e obrigações de proteção de dados equivalentes às da Organização.
                            </p>
                        </>
                    ))}

                    {renderSection('finalidades', 10, 'FINALIDADES DO TRATAMENTO', (
                        <>
                            <p className={S.paragraph}>
                                <strong>10.1. Legítimo Interesse</strong>
                            </p>
                            <p className={S.paragraph}>
                                A Organização poderá realizar o tratamento de dados pessoais com base em legítimo interesse, para as seguintes finalidades:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a)</strong> Prevenção à fraude e garantia de segurança do Site e da Plataforma;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b)</strong> Melhoria dos serviços oferecidos pela Organização, desenvolvimento de novos produtos e serviços;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c)</strong> Análise e compreensão do comportamento dos Usuários no Site a fim de identificar suas necessidades;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(d)</strong> Execução dos serviços contratados, sempre que envolverem a utilização, o armazenamento e/ou transmissão de dados pessoais;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(e)</strong> Criação de relatórios de uso interno para desenvolvimento de novos serviços e Conteúdo;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(f)</strong> Identificação dos perfis, hábitos e necessidades para eventuais estratégias da Organização;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(g)</strong> Realização de análises relacionadas à segurança, aperfeiçoamento e desenvolvimento do Site;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(h)</strong> Comunicação entre os Usuários e a Organização, inclusive mediante o envio e recebimento de e-mails;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(i)</strong> Gerenciamento de relacionamento com Usuário;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(j)</strong> Resolução de questionamentos ou reclamações;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(k)</strong> O exercício regular de direito em processo judicial, administrativo ou arbitral.
                            </p>
                            <p className={S.paragraph}>
                                <strong>10.2. Execução de Contrato</strong>
                            </p>
                            <p className={S.paragraph}>
                                A Organização poderá realizar o tratamento de dados pessoais durante o cumprimento de obrigações contratuais e/ou durante a realização de procedimentos preliminares relacionados a possíveis contratos a serem celebrados durante a relação com o titular, como por exemplo:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a)</strong> Cadastro de clientes e fornecedores para prestação de serviços ou fornecimento de produtos.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b)</strong> Processamento de pagamentos e envio de produtos.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c)</strong> Gerenciamento de pedidos, contratos e atendimento ao cliente.
                            </p>
                            <p className={S.paragraph}>
                                <strong>10.3. Cumprimento de obrigação legal ou regulamentar</strong>
                            </p>
                            <p className={S.paragraph}>
                                A Organização poderá realizar o tratamento de dados pessoais para fins de cumprimento de exigências legais ou regulatórias, sempre garantindo conformidade com normas aplicáveis.
                            </p>
                        </>
                    ))}

                    {renderSection('armazenamento', 11, 'ARMAZENAMENTO E PROTEÇÃO DE DADOS', (
                        <>
                            <p className={S.paragraph}>
                                A Organização toma todas as providências técnicas e organizacionais para proteger os dados pessoais dos Usuários do Site e de sua Plataforma contra perda, uso não autorizado ou outros abusos. Os dados são armazenados em um ambiente operacional seguro que não é acessível ao público.
                            </p>
                            <p className={S.paragraph}>
                                Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares de dados pessoais, a Organização se compromete a seguir todos os procedimentos e prazos de comunicação junto à ANPD, conforme determinado pela legislação vigente.
                            </p>
                        </>
                    ))}

                    {renderSection('direitos-titulares', 12, 'DIREITO DOS TITULARES', (
                        <>
                            <p className={S.paragraph}>
                                Ao utilizar o Site e fornecer seus dados pessoais, a Organização assegurará aos seus clientes e usuários os direitos previstos em lei, inclusive:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a) Acesso, informação e confirmação dos dados pessoais:</strong> ciência das informações e dados pessoais tratados;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b) Correção:</strong> correção de eventuais dados pessoais errôneos ou desatualizados;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c) Anonimização, bloqueio ou eliminação de dados pessoais excessivos, desnecessários ou tratados em desconformidade com a LGPD:</strong> a Organização verificará a desconformidade e, caso se confirme, tomará as devidas medidas;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(d) Exclusão de dados:</strong> eliminação de dados pessoais. Caso aplicável, alguns dados permanecerão armazenados para fins exclusivos de cumprimento de obrigações legais e/ou exercício regular de direitos;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(e) Gestão e Revogação de consentimento:</strong> retirada total ou parcial do consentimento fornecido (opt-out) para alguma funcionalidade;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(f) Revisão de decisões automatizadas:</strong> solicitação de revisão de uma decisão exclusivamente automatizada e que afeta os interesses de clientes e/ou Usuários; inclusive as baseadas em inteligência artificial, assegurando a intervenção humana, a contestação da decisão e a apresentação de seu ponto de vista, nos termos da LGPD e normas da ANPD.
                            </p>
                            <p className={S.paragraph}>
                                <strong>(g) Oposição:</strong> Oposição à forma como a Organização realiza o tratamento de dados pessoais, conforme as premissas estabelecidas pela ANPD e pela LGPD.
                            </p>
                        </>
                    ))}

                    {renderSection('periodo-armazenamento', 13, 'PERÍODO DE ARMAZENAMENTO', (
                        <p className={S.paragraph}>
                            Os dados pessoais coletados pela Organização serão objeto de tratamento somente pelo tempo que for necessário ao cumprimento das finalidades para as quais foram coletados, ressalvado o legítimo interesse e o atendimento a eventuais obrigações legais e/ou regulatórias.
                        </p>
                    ))}

                    {renderSection('disposicoes-gerais', 14, 'DISPOSIÇÕES GERAIS', (
                        <>
                            <p className={S.paragraph}>
                                <strong>14.1.</strong> Nos termos da Lei no 13.709/2018 (LGPD) e da Resolução CD/ANPD no 18/2024, compete exclusivamente à Diretoria Executiva da Organização a atribuição de responsabilidades relativas à proteção de dados, inclusive a nomeação de seu Data Protection Officer (DPO).
                            </p>
                            <p className={S.paragraph}>
                                <strong>14.2.</strong> Além de suas atribuições legais e regulatórias, são atribuições do DPO no âmbito da Organização:
                            </p>
                            <p className={S.paragraph}>
                                <strong>(a)</strong> Receber e gerenciar todas as formas de comunicação relativas à proteção de dados tanto no âmbito interno como no âmbito externo, incluindo a comunicação direta à ANPD;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(b)</strong> Propor à diretoria executiva, sempre que necessário ou mediante revisão anual obrigatória, alterações e adequações à presente Política, cuidando para que sejam encaminhadas à análise e aprovação junto à Diretoria Executiva;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(c)</strong> Revisar quaisquer documentos, treinamentos, procedimentos, métricas, avaliações e/ou informativos relativos à proteção de dados no âmbito da Organização;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(d)</strong> Gerenciar e documentar os processos de melhoria relacionados à proteção de dados no âmbito da Organização;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(e)</strong> Documentar e avaliar de forma contínua o nível de proteção e risco à privacidade no âmbito da Organização, cuidando para sua melhoria contínua;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(f)</strong> Em caso de co-controle de dados pessoais, cuidar para que as responsabilidades de cada controlador sejam delimitadas entre as partes envolvidas;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(g)</strong> Elaborar um plano de tratamento de riscos, sempre que forem identificados;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(h)</strong> Mapear e documentar a finalidade para a qual os dados pessoais foram coletados no âmbito da organização, bem como o potencial impacto de risco à privacidade dos titulares;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(i)</strong> Cuidar e planejar para que a coleta de dados pessoais no âmbito da organização se limite ao mínimo necessário ao desempenho das atividades da organização, enquanto objetivo a ser atingido;
                            </p>
                            <p className={S.paragraph}>
                                <strong>(j)</strong> Cuidar junto à operação para que os dados pessoais tratados no âmbito da organização estejam atualizados, sempre que necessário for ao desempenho das atividades da Organização;
                            </p>
                        </>
                    ))}

                    {renderSection('alteracao-revisao', 15, 'ALTERAÇÃO E REVISÃO PERIÓDICA', (
                        <>
                            <p className={S.paragraph}>
                                Esta Política deverá ser revisada anualmente, ou sempre que necessário, em razão de alterações legais ou operacionais relevantes, pelo DPO, sempre em conjunto com o time Segurança da Informação da Organização, conforme diretrizes determinadas pelo programa de governança em privacidade da ANPD.
                            </p>
                            <p className={S.paragraph}>
                                A Organização se reserva ao direito de modificar essa Política, unilateralmente, a qualquer tempo.
                            </p>
                        </>
                    ))}

                    {renderSection('aprovacao', 16, 'APROVAÇÃO', (
                        <>
                            <p className={S.paragraph}>
                                Esta Política e suas revisões deverão ser aprovadas pela totalidade dos membros da Diretoria Executiva.
                            </p>
                            <p className={S.paragraph}>
                                Esta Política foi aprovada pela Diretoria Executiva em 10/10/2025.
                            </p>
                        </>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default DataProtection;

