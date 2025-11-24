import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import 'src/i18n/i18n';

import { IconChevronDown, IconMenu2, IconX, IconBrandInstagram, IconShield, IconSettings, IconCalculator, IconTrendingUp, IconStar, IconHelp, IconUsers, IconBuilding, IconDeviceMobile } from '@tabler/icons-react';

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

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const isFaqPage = router.pathname === '/perguntas-frequentes';
    const [showLangs, setShowLangs] = useState(false);
    const [showAntecipacao, setShowAntecipacao] = useState(false);
    const [showEmpresa, setShowEmpresa] = useState(false);
    const [antecipacaoTimeout, setAntecipacaoTimeout] = useState<NodeJS.Timeout | null>(null);
    const [empresaTimeout, setEmpresaTimeout] = useState<NodeJS.Timeout | null>(null);
    const [selectedLang, setSelectedLang] = useState(i18n.language === 'en' ? 'en' : 'pt');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerClosing, setDrawerClosing] = useState(false);
    const [mobileAntecipacaoOpen, setMobileAntecipacaoOpen] = useState(false);
    const [mobileEmpresaOpen, setMobileEmpresaOpen] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1180 && drawerOpen) {
                setDrawerClosing(true);
                setTimeout(() => {
                    setDrawerOpen(false);
                    setDrawerClosing(false);
                }, 220);
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

    const handleAntecipacaoMouseEnter = () => {
        if (antecipacaoTimeout) {
            clearTimeout(antecipacaoTimeout);
            setAntecipacaoTimeout(null);
        }
        // Fecha outros dropdowns
        setShowEmpresa(false);
        setShowAntecipacao(true);
    };

    const handleAntecipacaoMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowAntecipacao(false);
        }, 300);
        setAntecipacaoTimeout(timeout);
    };

    const handleEmpresaMouseEnter = () => {
        if (empresaTimeout) {
            clearTimeout(empresaTimeout);
            setEmpresaTimeout(null);
        }
        // Fecha outros dropdowns
        setShowAntecipacao(false);
        setShowEmpresa(true);
    };

    const handleEmpresaMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowEmpresa(false);
        }, 300);
        setEmpresaTimeout(timeout);
    };

    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <nav className={`${S.navbar} ${isFaqPage ? S.faqPage : ''}`}>
            <div className={S.navbarContent}>
                <Link href="/" className={S.logo}>
                    <img className={S.logoImg} src={IMAGE.LOGO.src} alt="Capital Digital" />
                </Link>

                <button className={S.hamburger} onClick={() => setDrawerOpen(true)}>
                    <IconMenu2 size={34} />
                </button>

                <div className={S.menuCapsule}>
                    <div className={S.menu}>
                        <div
                            className={`${S.menuItemDropdown} ${showAntecipacao ? S.dropdownOpen : ''}`}
                            onMouseEnter={handleAntecipacaoMouseEnter}
                            onMouseLeave={handleAntecipacaoMouseLeave}
                        >
                            <span className={S.menuItem}>
                                Antecipação
                            </span>
                            {showAntecipacao && (
                                <div
                                    className={S.solutionsDropdown}
                                    onMouseEnter={handleAntecipacaoMouseEnter}
                                    onMouseLeave={handleAntecipacaoMouseLeave}
                                >
                                    <div className={S.dropdownHeader}>
                                        <h3 className={S.dropdownTitle}>Antecipação de Recebíveis</h3>
                                        <p className={S.dropdownSubtitle}>Soluções completas para transformar seus recebíveis em capital</p>
                                    </div>

                                    <div className={S.dropdownGrid}>
                                        <Link href="/antecipacao-de-recebiveis" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconShield />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Antecipação de Recebíveis</h4>
                                                <p className={S.itemDescription}>Transforme recebíveis em capital de giro com segurança e agilidade</p>
                                            </div>
                                        </Link>
                                        <Link href="/estruturacao-customizada" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconSettings />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Estruturação Customizada</h4>
                                                <p className={S.itemDescription}>Soluções personalizadas e sob medida para seu negócio</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={S.dropdownFooter}>
                                        <Link href="/solicitar-proposta" className={S.viewAllLink}>
                                            Solicitar proposta →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link className={S.menuItem} href="/capital-de-giro">
                            Capital de Giro
                        </Link>
                        <Link className={S.menuItem} href="/conta-digital">
                            Conta Digital
                        </Link>
                        <Link className={S.menuItem} href="/baixe-o-app">
                            Baixe o App
                        </Link>
                        <div
                            className={`${S.menuItemDropdown} ${showEmpresa ? S.dropdownOpen : ''}`}
                            onMouseEnter={handleEmpresaMouseEnter}
                            onMouseLeave={handleEmpresaMouseLeave}
                        >
                            <span className={S.menuItem}>
                                Empresa
                            </span>
                            {showEmpresa && (
                                <div
                                    className={S.solutionsDropdown}
                                    onMouseEnter={handleEmpresaMouseEnter}
                                    onMouseLeave={handleEmpresaMouseLeave}
                                >
                                    <div className={S.dropdownHeader}>
                                        <h3 className={S.dropdownTitle}>Nossa Empresa</h3>
                                        <p className={S.dropdownSubtitle}>Conheça mais sobre a Confia Digital e nossos valores</p>
                                    </div>

                                    <div className={S.dropdownGrid}>
                                        <Link href="/perguntas-frequentes" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconHelp />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Perguntas Frequentes</h4>
                                                <p className={S.itemDescription}>Tire suas dúvidas sobre antecipação e nossos serviços</p>
                                            </div>
                                        </Link>

                                        <Link href="/intranet" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconSettings />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Intranet</h4>
                                                <p className={S.itemDescription}>Portal com ferramentas e recursos úteis</p>
                                            </div>
                                        </Link>

                                        <Link href="/avaliacoes" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconStar />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Avaliações</h4>
                                                <p className={S.itemDescription}>Veja o que nossos clientes dizem sobre nossos serviços</p>
                                            </div>
                                        </Link>

                                        <Link href="/sobre-nos" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconBuilding />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Sobre Nós</h4>
                                                <p className={S.itemDescription}>Nossa história, missão e valores que nos guiam</p>
                                            </div>
                                        </Link>

                                        <Link href="/parceiros" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconUsers />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Parceiros</h4>
                                                <p className={S.itemDescription}>Conheça nossa rede de parceiros estratégicos</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={S.dropdownFooter}>
                                        <Link href="/sobre-nos" className={S.viewAllLink}>
                                            Conheça nossa empresa →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link className={S.menuItem} href="/contato">
                            Contato
                        </Link>
                    </div>
                </div>

                <div className={S.actionButtons}>
                    <Link href="/solicitar-proposta">
                        <Button
                            width="190px"
                            typeStyle="btn1"
                            size="sm"
                            label="Solicitar proposta"
                        />
                    </Link>
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
                            <Link href="/" className={S.drawerLogo} onClick={handleCloseDrawer}>
                                <img className={S.drawerLogoImg} src={IMAGE.LOGO.src} alt="Capital Digital" />
                            </Link>
                            <button className={S.closeBtn} onClick={handleCloseDrawer}>
                                <IconX size={32} />
                            </button>
                        </div>
                        <div className={S.drawerMenu}>
                            <div className={S.drawerLinks}>
                                <div className={S.drawerSubmenu}>
                                    <div
                                        className={S.drawerSubmenuTitle}
                                        onClick={() => setMobileAntecipacaoOpen(!mobileAntecipacaoOpen)}
                                    >
                                        <span>Antecipação</span>
                                        <IconChevronDown
                                            className={`${S.submenuArrow} ${mobileAntecipacaoOpen ? S.submenuArrowOpen : ''}`}
                                        />
                                    </div>
                                    {mobileAntecipacaoOpen && (
                                        <div className={S.drawerSubmenuItems}>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/antecipacao-de-recebiveis"
                                                onClick={handleCloseDrawer}
                                            >
                                                Antecipação de Recebíveis
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/estruturacao-customizada"
                                                onClick={handleCloseDrawer}
                                            >
                                                Estruturação Customizada
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    className={S.menuItem}
                                    href="/capital-de-giro"
                                    onClick={handleCloseDrawer}
                                >
                                    Capital de Giro
                                </Link>
                                <Link
                                    className={S.menuItem}
                                    href="/conta-digital"
                                    onClick={handleCloseDrawer}
                                >
                                    Conta Digital
                                </Link>
                                <Link
                                    className={S.menuItem}
                                    href="/baixe-o-app"
                                    onClick={handleCloseDrawer}
                                >
                                    Baixe o App
                                </Link>

                                <div className={S.drawerSubmenu}>
                                    <div
                                        className={S.drawerSubmenuTitle}
                                        onClick={() => setMobileEmpresaOpen(!mobileEmpresaOpen)}
                                    >
                                        <span>Empresa</span>
                                        <IconChevronDown
                                            className={`${S.submenuArrow} ${mobileEmpresaOpen ? S.submenuArrowOpen : ''}`}
                                        />
                                    </div>
                                    {mobileEmpresaOpen && (
                                        <div className={S.drawerSubmenuItems}>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/perguntas-frequentes"
                                                onClick={handleCloseDrawer}
                                            >
                                                Perguntas Frequentes
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/intranet"
                                                onClick={handleCloseDrawer}
                                            >
                                                Intranet
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/avaliacoes"
                                                onClick={handleCloseDrawer}
                                            >
                                                Avaliações
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/sobre-nos"
                                                onClick={handleCloseDrawer}
                                            >
                                                Sobre Nós
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/parceiros"
                                                onClick={handleCloseDrawer}
                                            >
                                                Parceiros
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link
                                    className={S.menuItem}
                                    href="/contato"
                                    onClick={handleCloseDrawer}
                                >
                                    Contato
                                </Link>
                                {/* Idiomas temporariamente comentados */}
                                {/* <div className={S.drawerLangWrap}>
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
                                </div> */}
                            </div>
                        </div>
                        <div className={S.drawerFooter}>
                            <div className={S.drawerSocials}>
                                <a href="https://www.instagram.com/confiacapitaloficial/" target="_blank" className={S.drawerSocialItem}><IconBrandInstagram size={34} /></a>
                            </div>
                            <div className={S.drawerCopyright}>
                                {t('footer.copyright', { year: getCurrentYear() })}
                            </div>
                            <div className={S.drawerButtonWrap}>
                                <Link href="/solicitar-proposta" onClick={handleCloseDrawer}>
                                    <Button width="100%" typeStyle="btn1" size="sm"
                                        label="Solicitar proposta" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
