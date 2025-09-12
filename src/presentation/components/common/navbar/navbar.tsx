import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'src/i18n/i18n';

import { IconChevronDown, IconMenu2, IconX, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react';

import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';

import S from './navbar.module.scss';

const LANGS = [
    { code: 'en', label: 'EN', flag: 'us' },
    { code: 'pt', label: 'PT-BR', flag: 'br' },
];

const FLAG_SVGS: Record<string, JSX.Element> = {
    br: (
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="20" rx="2" fill="#009B3A" />
            <polygon points="15,3 27,10 15,17 3,10" fill="#FEDF00" />
            <circle cx="15" cy="10" r="5" fill="#002776" />
            <path d="M12 10a3 3 0 0 1 6 0" stroke="#fff" strokeWidth="1.2" fill="none" />
        </svg>
    ),
    us: (
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="20" rx="2" fill="#B22234" />
            <rect y="2" width="30" height="2" fill="#fff" />
            <rect y="6" width="30" height="2" fill="#fff" />
            <rect y="10" width="30" height="2" fill="#fff" />
            <rect y="14" width="30" height="2" fill="#fff" />
            <rect y="18" width="30" height="2" fill="#fff" />
            <rect width="12" height="10" fill="#3C3B6E" />
            <g fill="#fff">
                <circle cx="2" cy="2" r="0.5" />
                <circle cx="4" cy="2" r="0.5" />
                <circle cx="6" cy="2" r="0.5" />
                <circle cx="8" cy="2" r="0.5" />
                <circle cx="10" cy="2" r="0.5" />
                <circle cx="3" cy="4" r="0.5" />
                <circle cx="5" cy="4" r="0.5" />
                <circle cx="7" cy="4" r="0.5" />
                <circle cx="9" cy="4" r="0.5" />
                <circle cx="2" cy="6" r="0.5" />
                <circle cx="4" cy="6" r="0.5" />
                <circle cx="6" cy="6" r="0.5" />
                <circle cx="8" cy="6" r="0.5" />
                <circle cx="10" cy="6" r="0.5" />
                <circle cx="3" cy="8" r="0.5" />
                <circle cx="5" cy="8" r="0.5" />
                <circle cx="7" cy="8" r="0.5" />
                <circle cx="9" cy="8" r="0.5" />
            </g>
        </svg>
    ),
};

function handleSmoothScroll(e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function handleDrawerMenuClick(e: React.MouseEvent<HTMLElement, MouseEvent>, id: string, closeDrawer: () => void) {
    e.preventDefault();
    closeDrawer();
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 250); // um pouco mais que o tempo da animação
}

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [showLangs, setShowLangs] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [solutionsTimeout, setSolutionsTimeout] = useState<NodeJS.Timeout | null>(null);
    const [selectedLang, setSelectedLang] = useState(i18n.language === 'en' ? 'en' : 'pt');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerClosing, setDrawerClosing] = useState(false);

    const selected = LANGS.find(l => l.code === selectedLang) || LANGS[0];

    useEffect(() => {
        if (drawerOpen || drawerClosing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [drawerOpen, drawerClosing]);



    // Fecha o drawer se a tela aumentar para desktop, com animação
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1180 && drawerOpen) {
                setDrawerClosing(true);
                setTimeout(() => {
                    setDrawerOpen(false);
                    setDrawerClosing(false);
                }, 220); // mesmo tempo da animação
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [drawerOpen]);

    const handleCloseDrawer = () => {
        setDrawerClosing(true);
        setTimeout(() => {
            setDrawerOpen(false);
            setDrawerClosing(false);
        }, 220);
    };

    const handleChangeLang = (langCode: string) => {
        setSelectedLang(langCode);
        i18n.changeLanguage(langCode);
        setShowLangs(false);
    };

    const handleSolutionsMouseEnter = () => {
        if (solutionsTimeout) {
            clearTimeout(solutionsTimeout);
            setSolutionsTimeout(null);
        }
        setShowSolutions(true);
    };

    const handleSolutionsMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowSolutions(false);
        }, 150);
        setSolutionsTimeout(timeout);
    };

    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <nav className={S.navbar}>
            <div className={S.navbarContent}>
                <div className={S.logo}>
                    <img className={S.logoImg} src={IMAGE.LOGO.src} alt="Capital Digital" />
                </div>

                <button className={S.hamburger} onClick={() => setDrawerOpen(true)}>
                    <IconMenu2 size={34} />
                </button>

                <div className={S.menuCapsule}>
                <div className={S.menu}>
                    <div 
                        className={S.menuItemDropdown}
                        onMouseEnter={handleSolutionsMouseEnter}
                        onMouseLeave={handleSolutionsMouseLeave}
                    >
                        <span className={S.menuItem}>
                            {t('menu.services')}
                        </span>
                        {showSolutions && (
                              <div 
                                  className={S.solutionsDropdown}
                                  onMouseEnter={handleSolutionsMouseEnter}
                                  onMouseLeave={handleSolutionsMouseLeave}
                              >
                                 <div className={S.dropdownSection}>
                                     <div className={S.sectionHeader}>
                                         <div className={S.sectionIcon}>
                                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                 <rect x="2" y="4" width="20" height="16" rx="2" fill="#010553"/>
                                             </svg>
                                         </div>
                                         <h3 className={S.sectionTitle}>Conta corrente empresarial</h3>
                                     </div>
                                     <p className={S.sectionDescription}>
                                         Uma conta poderosa criada para pequenas empresas: ganhe juros de alto rendimento, economize em taxas e nunca mais vá ao banco.
                                     </p>
                                     <Link href="#conta-corrente" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Saber mais</h4>
                                         </div>
                                     </Link>
                                 </div>
                                 
                                 <div className={S.dropdownSection}>
                                     <h4 className={S.sectionTitle}>CARACTERÍSTICAS E BENEFÍCIOS</h4>
                                     <Link href="#sem-taxas" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Sem taxas mensais</h4>
                                             <p className={S.itemDescription}>Sem taxas mensais ou de cheque especial, além de transferências ACH padrão gratuitas.</p>
                                         </div>
                                     </Link>
                                     <Link href="#alto-apy" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Alto APY na verificação</h4>
                                             <p className={S.itemDescription}>Ganhe mais de 20 vezes a média nacional ou mais com plano atualizado.</p>
                                         </div>
                                     </Link>
                                     <Link href="#subcontas" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Subcontas</h4>
                                             <p className={S.itemDescription}>Gerencie orçamentos facilmente usando várias contas.</p>
                                         </div>
                                     </Link>
                                     <Link href="#cartoes" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Cartões de débito físicos e virtuais</h4>
                                             <p className={S.itemDescription}>Emita cartões de débito com limites de gastos para sua equipe.</p>
                                         </div>
                                     </Link>
                                 </div>
                                 
                                 <div className={S.dropdownSection}>
                                     <Link href="#links-faturamento" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Links de faturamento e pagamento</h4>
                                             <p className={S.itemDescription}>Receba pagamentos por cartão ou carteira digital diretamente na sua conta Bluevine.</p>
                                         </div>
                                     </Link>
                                     <Link href="#contas-pagar" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Contas a pagar</h4>
                                             <p className={S.itemDescription}>Economize tempo no gerenciamento de contas e automatize seus pagamentos.</p>
                                         </div>
                                     </Link>
                                     <Link href="#pagamentos-internacionais" className={S.dropdownItem}>
                                         <div className={S.itemContent}>
                                             <h4 className={S.itemTitle}>Pagamentos internacionais</h4>
                                             <p className={S.itemDescription}>Envie e receba dinheiro globalmente em até 24 horas.</p>
                                         </div>
                                     </Link>
                                 </div>
                                 
                                 <div className={S.ctaSection}>
                                     <div className={S.ctaLinks}>
                                         <Link href="#explorar-recursos" className={S.ctaLink}>
                                             Explore todos os recursos
                                         </Link>
                                         <Link href="#planos-precos" className={S.ctaLink}>
                                             Veja planos e preços
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                         )}
                    </div>
                    <Link
                        className={S.menuItem}
                        href="#impacto-igx"
                        onClick={e => handleSmoothScroll(e, 'impacto-igx')}
                        scroll={false}
                    >
                        {t('menu.impact')}
                    </Link>
                    <div className={S.langSelect}>
                        <span className={S.flagIcon}>
                            {FLAG_SVGS[selected.flag]}
                        </span>
                        <span
                            className={`${S.arrowCircle} ${showLangs ? S.arrowActive : ''}`}
                            onClick={() => setShowLangs(v => !v)}
                        >
                            <IconChevronDown className={S.arrowDown} />
                        </span>
                        {showLangs && (
                            <div
                                className={S.langDropdown}
                                onMouseLeave={() => setShowLangs(false)}
                            >
                                {LANGS.map((lang) => (
                                    <div
                                        key={lang.code}
                                        className={`${S.langOption} ${lang.code === selectedLang ? S.langActive : ''}`}
                                        onClick={() => handleChangeLang(lang.code)}
                                    >
                                        <span>{lang.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button width="190px" onClick={e => handleSmoothScroll(e, 'agendamento')} typeStyle="btn1" size="sm" label={t('menu.cta')} />
                </div>
            </div>
            </div>
            {(drawerOpen || drawerClosing) && (
                <>
                    <div
                        className={drawerClosing ? `${S.drawerBackdrop} ${S.drawerBackdropHidden}` : S.drawerBackdrop}
                        onClick={handleCloseDrawer}
                    />
                    <div className={drawerClosing ? `${S.drawer} ${S.drawerClosing}` : S.drawer}>
                        <div className={S.drawerHeader}>
                            <div className={S.drawerLogo}>
                                <img className={S.drawerLogoImg} src={IMAGE.LOGO.src} alt="Capital Digital" />
                            </div>
                            <button className={S.closeBtn} onClick={handleCloseDrawer}>
                                <IconX size={32} />
                            </button>
                        </div>
                        <div className={S.drawerMenu}>
                            <div className={S.drawerLinks}>
                                <Link
                                    className={S.menuItem}
                                    href="#automacoes"
                                    onClick={e => handleDrawerMenuClick(e, 'automacoes', handleCloseDrawer)}
                                    scroll={false}
                                >
                                    {t('menu.services')}
                                </Link>
                                <Link
                                    className={S.menuItem}
                                    href="#impacto-igx"
                                    onClick={e => handleDrawerMenuClick(e, 'impacto-igx', handleCloseDrawer)}
                                    scroll={false}
                                >
                                    {t('menu.impact')}
                                </Link>
                                <div className={S.drawerLangWrap}>
                                    <p className={S.menuItemLang}>
                                        {t('menu.language')}
                                    </p>
                                    <div className={S.langSelect}>
                                        <div className={S.langSelectWrap}>
                                            <span className={S.flagIcon}>
                                                {FLAG_SVGS[selected.flag]}
                                            </span>
                                            <span
                                                className={`${S.arrowCircle} ${showLangs ? S.arrowActive : ''}`}
                                                onClick={() => setShowLangs(v => !v)}
                                            >
                                                <IconChevronDown className={S.arrowDown} />
                                            </span>
                                        </div>
                                        {showLangs && (
                                            <div
                                                className={S.langDropdown}
                                                onMouseLeave={() => setShowLangs(false)}
                                            >
                                                {LANGS.map((lang) => (
                                                    <div
                                                        key={lang.code}
                                                        className={`${S.langOption} ${lang.code === selectedLang ? S.langActive : ''}`}
                                                        onClick={() => handleChangeLang(lang.code)}
                                                    >
                                                        <span>{lang.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={S.drawerFooter}>
                            <div className={S.drawerSocials}>
                                <a href="https://www.instagram.com/igxiasolutions/" target="_blank" className={S.drawerSocialItem}><IconBrandInstagram size={34} /></a>
                                <a href="https://www.linkedin.com/company/102209808/admin/dashboard/" target="_blank" className={S.drawerSocialItem}><IconBrandLinkedin size={34} /></a>
                            </div>
                            <div className={S.drawerCopyright}>
                                {t('footer.copyright', { year: getCurrentYear() })}
                            </div>
                            <div className={S.drawerButtonWrap}>
                                <Button width="90%" typeStyle="btn1" size="sm" onClick={e => { handleSmoothScroll(e, 'agendamento'); handleCloseDrawer(); }}
                                    label={t('menu.cta')} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
