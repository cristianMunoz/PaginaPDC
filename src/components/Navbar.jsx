import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

import churchLogo from '../assets/logo_digital_final.png';
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
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', minHeight: isScrolled ? '45px' : '90px', padding: isScrolled ? '2px 1.5rem' : '5px 1.5rem', position: 'relative', transition: 'all 0.3s ease' }}>

                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', flexShrink: 0 }}>
                    <img
                        src={churchLogo}
                        alt="Logo Iglesia"
                        className="logo-church"
                        style={{
                            height: isScrolled ? '36px' : '70px',
                            transition: 'height 0.3s ease',
                            objectFit: 'contain'
                        }}
                    />

                    <div className="logo-divider" style={{ width: '2px', height: isScrolled ? '24px' : '45px', background: 'var(--border-color)', margin: '0 1rem', transition: 'height 0.3s ease' }}></div>

                    <img
                        src={adLogo}
                        alt="Logo Asambleas de Dios"
                        className="logo-ad-white"
                        style={{
                            height: isScrolled ? '22px' : '40px',
                            transition: 'height 0.3s ease',
                            objectFit: 'contain'
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

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <a href="#inicio" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.home')}</a>
                    <a href="#eventos" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.events')}</a>
                    <a href="#nosotros" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.about')}</a>
                    <a href="#liderazgo" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.leadership')}</a>
                    <a href="#horarios" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.schedule')}</a>
                    <a href="#contacto" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: '700', fontSize: isScrolled ? '0.85rem' : '0.95rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }} className="nav-link">{t('navbar.contact')}</a>

                    <div className="nav-actions" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '0.5rem' }}>
                        <button onClick={() => setIsDark(!isDark)} className="btn-icon" aria-label="Toggle Dark Mode" style={{ transform: isScrolled ? 'scale(0.85)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                            {isDark ? <Sun size={20} color="currentColor" /> : <Moon size={20} color="currentColor" />}
                        </button>
                        <button onClick={toggleLanguage} className="btn-icon" aria-label="Toggle Language" title={`Cambiar a ${i18n.language === 'es' ? 'English' : 'Español'}`} style={{ transform: isScrolled ? 'scale(0.85)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                            <Globe size={20} color="currentColor" />
                        </button>
                        <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="btn-primary" style={{ 
                            marginLeft: '0.5rem', 
                            padding: isScrolled ? '0.4rem 1rem' : '0.6rem 1.4rem', 
                            fontSize: isScrolled ? '0.85rem' : '0.95rem', 
                            boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                            transition: 'all 0.3s ease'
                        }}>{t('navbar.visit')}</a>
                    </div>
                </div>
            </div>

            <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)', opacity: 0.9, position: 'absolute', bottom: 0, left: 0, right: 0 }}></div>
        </nav>
    );
};

export default Navbar;
