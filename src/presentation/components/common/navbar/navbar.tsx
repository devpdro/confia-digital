import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import 'src/i18n/i18n';

import { IconChevronDown, IconMenu2, IconX, IconBrandInstagram, IconShield, IconSettings, IconCalculator, IconTrendingUp, IconStar, IconHelp, IconUsers, IconBuilding, IconDeviceMobile, IconCreditCard, IconFileInvoice, IconCar, IconLock, IconDownload, IconServer } from '@tabler/icons-react';

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
    const [showEmprestimos, setShowEmprestimos] = useState(false);
    const [showContaDigital, setShowContaDigital] = useState(false);
    const [showEmpresa, setShowEmpresa] = useState(false);
    const [antecipacaoTimeout, setAntecipacaoTimeout] = useState<NodeJS.Timeout | null>(null);
    const [emprestimosTimeout, setEmprestimosTimeout] = useState<NodeJS.Timeout | null>(null);
    const [contaDigitalTimeout, setContaDigitalTimeout] = useState<NodeJS.Timeout | null>(null);
    const [empresaTimeout, setEmpresaTimeout] = useState<NodeJS.Timeout | null>(null);
    const [selectedLang, setSelectedLang] = useState(i18n.language === 'en' ? 'en' : 'pt');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerClosing, setDrawerClosing] = useState(false);
    const [mobileAntecipacaoOpen, setMobileAntecipacaoOpen] = useState(false);
    const [mobileEmprestimosOpen, setMobileEmprestimosOpen] = useState(false);
    const [mobileContaDigitalOpen, setMobileContaDigitalOpen] = useState(false);
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
            if (window.innerWidth >= 1024 && drawerOpen) {
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
        setShowEmprestimos(false);
        setShowContaDigital(false);
        setShowEmpresa(false);
        setShowAntecipacao(true);
    };

    const handleAntecipacaoMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowAntecipacao(false);
        }, 300);
        setAntecipacaoTimeout(timeout);
    };

    const handleEmprestimosMouseEnter = () => {
        if (emprestimosTimeout) {
            clearTimeout(emprestimosTimeout);
            setEmprestimosTimeout(null);
        }
        // Fecha outros dropdowns
        setShowAntecipacao(false);
        setShowContaDigital(false);
        setShowEmpresa(false);
        setShowEmprestimos(true);
    };

    const handleEmprestimosMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowEmprestimos(false);
        }, 300);
        setEmprestimosTimeout(timeout);
    };

    const handleContaDigitalMouseEnter = () => {
        if (contaDigitalTimeout) {
            clearTimeout(contaDigitalTimeout);
            setContaDigitalTimeout(null);
        }
        // Fecha outros dropdowns
        setShowAntecipacao(false);
        setShowEmprestimos(false);
        setShowEmpresa(false);
        setShowContaDigital(true);
    };

    const handleContaDigitalMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowContaDigital(false);
        }, 300);
        setContaDigitalTimeout(timeout);
    };

    const handleEmpresaMouseEnter = () => {
        if (empresaTimeout) {
            clearTimeout(empresaTimeout);
            setEmpresaTimeout(null);
        }
        // Fecha outros dropdowns
        setShowAntecipacao(false);
        setShowEmprestimos(false);
        setShowContaDigital(false);
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
                                        <Link href="/antecipacao-de-duplicatas" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconFileInvoice />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Antecipação de Duplicatas</h4>
                                                <p className={S.itemDescription}>Transforme suas duplicatas em capital de giro com segurança e agilidade</p>
                                            </div>
                                        </Link>
                                        <Link href="/antecipacao-de-contratos" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconShield />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Antecipação de Contratos</h4>
                                                <p className={S.itemDescription}>Antecipe recebíveis de contratos e melhore seu fluxo de caixa</p>
                                            </div>
                                        </Link>
                                        <Link href="/estruturacao-customizada" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconSettings />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Operações Estruturadas</h4>
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
                        <div
                            className={`${S.menuItemDropdown} ${showEmprestimos ? S.dropdownOpen : ''}`}
                            onMouseEnter={handleEmprestimosMouseEnter}
                            onMouseLeave={handleEmprestimosMouseLeave}
                        >
                            <span className={S.menuItem}>
                                Empréstimos
                            </span>
                            {showEmprestimos && (
                                <div
                                    className={S.solutionsDropdown}
                                    onMouseEnter={handleEmprestimosMouseEnter}
                                    onMouseLeave={handleEmprestimosMouseLeave}
                                >
                                    <div className={S.dropdownHeader}>
                                        <h3 className={S.dropdownTitle}>Empréstimos</h3>
                                        <p className={S.dropdownSubtitle}>Soluções de crédito para suas necessidades</p>
                                    </div>

                                    <div className={S.dropdownGrid}>
                                        <Link href="/emprestimo-pessoal" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconCreditCard />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Empréstimo Pessoal</h4>
                                                <p className={S.itemDescription}>Crédito pessoal rápido e descomplicado para suas necessidades</p>
                                            </div>
                                        </Link>
                                        <Link href="/emprestimo-veiculo" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconCar />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Empréstimo Pessoal com Garantia de veículo - Car Equity</h4>
                                                <p className={S.itemDescription}>Use seu veículo como garantia e obtenha crédito com condições especiais</p>
                                            </div>
                                        </Link>
                                        <Link href="/financiamento-veiculo" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconCalculator />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Financiamento de Veículo</h4>
                                                <p className={S.itemDescription}>Financie seu veículo com as melhores condições do mercado</p>
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
                        <div
                            className={`${S.menuItemDropdown} ${showContaDigital ? S.dropdownOpen : ''}`}
                            onMouseEnter={handleContaDigitalMouseEnter}
                            onMouseLeave={handleContaDigitalMouseLeave}
                        >
                            <span className={S.menuItem}>
                                Conta Digital
                            </span>
                            {showContaDigital && (
                                <div
                                    className={S.solutionsDropdown}
                                    onMouseEnter={handleContaDigitalMouseEnter}
                                    onMouseLeave={handleContaDigitalMouseLeave}
                                >
                                    <div className={S.dropdownHeader}>
                                        <h3 className={S.dropdownTitle}>Conta Digital</h3>
                                        <p className={S.dropdownSubtitle}>Soluções bancárias digitais para pessoas físicas e jurídicas</p>
                                    </div>

                                    <div className={S.dropdownGrid}>
                                        <Link href="/conta-digital" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconDeviceMobile />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Conta Digital PF e PJ</h4>
                                                <p className={S.itemDescription}>Conta digital completa para pessoas físicas e jurídicas</p>
                                            </div>
                                        </Link>
                                        <Link href="/conta-escrow" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconLock />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Conta Escrow</h4>
                                                <p className={S.itemDescription}>Proteja negociações de alto valor com conta garantida</p>
                                            </div>
                                        </Link>
                                        <Link href="/baixe-o-app" className={S.dropdownItem}>
                                            <div className={S.itemIcon}>
                                                <IconDownload />
                                            </div>
                                            <div className={S.itemContent}>
                                                <h4 className={S.itemTitle}>Baixe o App</h4>
                                                <p className={S.itemDescription}>Gerencie seu capital de giro direto pelo app</p>
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
                        <Link className={S.menuItem} href="/contato">
                            Contato
                        </Link>
                        <div
                            className={`${S.menuItemDropdown} ${S.menuItemDropdownLast} ${showEmpresa ? S.dropdownOpen : ''}`}
                            onMouseEnter={handleEmpresaMouseEnter}
                            onMouseLeave={handleEmpresaMouseLeave}
                        >
                            <span className={S.menuItem}>
                                Empresa
                            </span>
                            {showEmpresa && (
                                <div
                                    className={`${S.solutionsDropdown} ${S.solutionsDropdownLast}`}
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
                                                <IconServer />
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
                                                href="/antecipacao-de-duplicatas"
                                                onClick={handleCloseDrawer}
                                            >
                                                Antecipação de Duplicatas
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/antecipacao-de-contratos"
                                                onClick={handleCloseDrawer}
                                            >
                                                Antecipação de Contratos
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/estruturacao-customizada"
                                                onClick={handleCloseDrawer}
                                            >
                                                Operações Estruturadas
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <div className={S.drawerSubmenu}>
                                    <div
                                        className={S.drawerSubmenuTitle}
                                        onClick={() => setMobileEmprestimosOpen(!mobileEmprestimosOpen)}
                                    >
                                        <span>Empréstimos</span>
                                        <IconChevronDown
                                            className={`${S.submenuArrow} ${mobileEmprestimosOpen ? S.submenuArrowOpen : ''}`}
                                        />
                                    </div>
                                    {mobileEmprestimosOpen && (
                                        <div className={S.drawerSubmenuItems}>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/emprestimo-pessoal"
                                                onClick={handleCloseDrawer}
                                            >
                                                Empréstimo Pessoal
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/emprestimo-veiculo"
                                                onClick={handleCloseDrawer}
                                            >
                                                Empréstimo Pessoal com Garantia de veículo - Car Equity
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/financiamento-veiculo"
                                                onClick={handleCloseDrawer}
                                            >
                                                Financiamento de Veículo
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

                                <div className={S.drawerSubmenu}>
                                    <div
                                        className={S.drawerSubmenuTitle}
                                        onClick={() => setMobileContaDigitalOpen(!mobileContaDigitalOpen)}
                                    >
                                        <span>Conta Digital</span>
                                        <IconChevronDown
                                            className={`${S.submenuArrow} ${mobileContaDigitalOpen ? S.submenuArrowOpen : ''}`}
                                        />
                                    </div>
                                    {mobileContaDigitalOpen && (
                                        <div className={S.drawerSubmenuItems}>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/conta-digital"
                                                onClick={handleCloseDrawer}
                                            >
                                                Conta Digital PF e PJ
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/conta-escrow"
                                                onClick={handleCloseDrawer}
                                            >
                                                Conta Escrow
                                            </Link>
                                            <Link
                                                className={S.drawerSubmenuItem}
                                                href="/baixe-o-app"
                                                onClick={handleCloseDrawer}
                                            >
                                                Baixe o App
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
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
