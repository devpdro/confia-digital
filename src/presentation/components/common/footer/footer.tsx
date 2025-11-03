import Link from 'next/link';

import S from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={S.footer}>
            <div className={S.container}>
                <div className={S.content}>
                    {/* Navigation Links */}
                    <div className={S.topSection}>
                        <div className={S.navLinks}>
                            <Link href="/sobre-nos" className={S.navLink}>Sobre nós</Link>
                            <Link href="/parceiros" className={S.navLink}>Parceiros</Link>
                            <Link href="/avaliacoes" className={S.navLink}>Avaliações</Link>
                            <Link href="/contato" className={S.navLink}>Contato</Link>
                            <Link href="/intranet" className={S.navLink}>Intranet</Link>
                        </div>
                    </div>

                    <div className={S.divider}></div>

                    {/* Main Footer Content */}
                    <div className={S.mainContent}>
                        <div className={S.columns}>
                            {/* Soluções Column */}
                            <div className={S.column}>
                                <h3 className={S.columnTitle}>Soluções</h3>
                                <ul className={S.linkList}>
                                    <li><Link href="/securitizacao-de-recebiveis" className={S.link}>Securitização de Recebíveis</Link></li>
                                    <li><Link href="/antecipacao-de-contratos" className={S.link}>Antecipação de Contratos</Link></li>
                                    <li><Link href="/estruturacao-customizada" className={S.link}>Estruturação Customizada</Link></li>
                                </ul>
                            </div>

                            {/* Recursos Column */}
                            <div className={S.column}>
                                <h3 className={S.columnTitle}>Recursos</h3>
                                <ul className={S.linkList}>
                                    <li><Link href="/investimentos" className={S.link}>Conta de Investimentos</Link></li>
                                    <li><Link href="/perguntas-frequentes" className={S.link}>Perguntas Frequentes</Link></li>
                                </ul>
                            </div>

                            {/* Jurídico Column */}
                            <div className={S.column}>
                                <h3 className={S.columnTitle}>Jurídico</h3>
                                <ul className={S.linkList}>
                                    <li><Link href="/termos-de-uso" className={S.link}>Termos de Uso</Link></li>
                                    <li><Link href="/politica-de-privacidade" className={S.link}>Política de Privacidade</Link></li>
                                    <li><Link href="/codigo-de-conduta" className={S.link}>Código de Conduta</Link></li>
                                    <li><Link href="/regulamentacoes-cvm" className={S.link}>Regulamentações CVM</Link></li>
                                    <li><Link href="/contratos-padrao" className={S.link}>Contratos Padrão</Link></li>
                                    <li><Link href="/ouvidoria" className={S.link}>Ouvidoria</Link></li>
                                </ul>
                            </div>

                            {/* Social Media & Info Column */}
                            <div className={S.column}>
                                <div className={S.socialMedia}>
                                    <a href="https://www.instagram.com/confiacapitaloficial/" className={S.socialLink} aria-label="Instagram">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>

                                <div className={S.companyInfo}>
                                    <p className={S.infoText}>
                                        Securitizadora autorizada pela CVM para emissão de certificados de recebíveis.
                                    </p>
                                    <p className={S.infoText}>
                                        Todas as operações são estruturadas conforme  <Link href="/regulamentacoes-cvm" className={S.infoLink}>regulamentação CVM </Link> e Banco Central. Consulte nosso Código CVM para mais informações.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;