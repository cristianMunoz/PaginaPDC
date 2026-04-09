import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

import churchLogo from '../assets/media__1772557959477.jpg';
import adLogo from '../assets/ad_logo_white.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className={`surface ${isScrolled ? 'glass-nav' : ''}`} style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: isScrolled ? 'transparent' : 'var(--bg-surface)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: isScrolled ? '70px' : '80px', padding: '5px 1.5rem', position: 'relative', transition: 'min-height 0.3s ease' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'nowrap' }}>
                    <img
                        src={churchLogo}
                        alt="Logo Iglesia"
                        className="logo-church"
                        style={{
                            height: isScrolled ? '60px' : '100px',
                            transition: 'height 0.3s ease'
                        }}
                    />

                    <div className="logo-divider" style={{ width: '2px', height: isScrolled ? '35px' : '55px', background: 'var(--border-color)', margin: '0 0.5rem', transition: 'height 0.3s ease' }}></div>

                    <img
                        src={adLogo}
                        alt="Logo Asambleas de Dios"
                        className="logo-ad-white"
                        style={{
                            height: isScrolled ? '28px' : '35px',
                            transition: 'height 0.3s ease'
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = document.getElementById('ad-text-fallback-final');
                            if (fallback) fallback.style.display = 'block';
                        }}
                    />
                    <span id="ad-text-fallback-final" style={{ display: 'none', fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)' }}>Asambleas de Dios</span>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#inicio" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="nav-link">{t('navbar.home')}</a>
                    <a href="#eventos" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="nav-link">{t('navbar.events')}</a>
                    <a href="#nosotros" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="nav-link">{t('navbar.about')}</a>
                    <a href="#horarios" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="nav-link">{t('navbar.schedule')}</a>
                    <a href="#contacto" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="nav-link">{t('navbar.contact')}</a>

                    <div className="nav-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '1rem' }}>
                        <button onClick={() => setIsDark(!isDark)} className="btn-icon" aria-label="Toggle Dark Mode" style={{ transform: 'scale(1.1)' }}>
                            {isDark ? <Sun size={22} color="currentColor" /> : <Moon size={22} color="currentColor" />}
                        </button>
                        <button onClick={toggleLanguage} className="btn-icon" aria-label="Toggle Language" title={`Cambiar a ${i18n.language === 'es' ? 'English' : 'Español'}`} style={{ transform: 'scale(1.1)' }}>
                            <Globe size={22} color="currentColor" />
                        </button>
                        <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="btn-primary" style={{ marginLeft: '1rem', padding: '0.65rem 1.8rem', fontSize: '1.05rem', boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)' }}>{t('navbar.visit')}</a>
                    </div>
                </div>
            </div>

            <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)', opacity: 0.9, position: 'absolute', bottom: 0, left: 0, right: 0 }}></div>
        </nav>
    );
};

export default Navbar;
