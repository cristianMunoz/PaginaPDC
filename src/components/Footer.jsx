import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';

import churchLogoWhite from '../assets/logo_digital_final.png';
import adLogo from '../assets/ad_logo_white.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{ background: '#0F172A', color: 'white', padding: '5rem 0 2rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.4rem' }}>Puerta del Cielo</h3>
                    <p style={{ color: '#94A3B8', marginBottom: '0.5rem' }}>{t('contact.address_desc')}</p>
                    <p style={{ color: '#94A3B8', marginBottom: '2rem' }}>Carrera 9a 75-56 sur</p>
                    <img 
                        src={churchLogoWhite} 
                        alt="Puerta del Cielo" 
                        style={{ height: '60px', marginLeft: '-10px', display: 'block', filter: 'opacity(0.6)', transition: 'all 0.3s ease', cursor: 'default' }} 
                        onMouseOver={e => {e.currentTarget.style.filter = 'opacity(1)'; e.currentTarget.style.transform = 'scale(1.05)';}}
                        onMouseOut={e => {e.currentTarget.style.filter = 'opacity(0.6)'; e.currentTarget.style.transform = 'scale(1)';}}
                    />
                </div>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.4rem' }}>{t('contact.title')}</h3>
                    <p style={{ color: '#94A3B8', marginBottom: '0.5rem' }}>Tel: 320 453 8023</p>
                    <p style={{ color: '#94A3B8', marginBottom: '1.5rem' }}>Pastor Alex Gomez</p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://www.facebook.com/share/1Kq8YP8Mhk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.color = '#1877F2'; e.currentTarget.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.transform = 'scale(1)';}}>
                            <Facebook size={26} />
                        </a>
                        <a href="https://www.instagram.com/ccristianapuertadelcielo?igsh=aGF1MzJibWlrd3Nj" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.color = '#E1306C'; e.currentTarget.style.transform = 'scale(1.1)';}} onMouseOut={e => {e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.transform = 'scale(1)';}}>
                            <Instagram size={26} />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.4rem' }}>Asambleas de Dios</h3>
                    <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>{t('footer.ad_desc')}</p>
                    <img 
                        src={adLogo} 
                        alt="Asambleas de Dios" 
                        style={{ height: '40px', filter: 'opacity(0.6)', transition: 'all 0.3s ease' }} 
                        onMouseOver={e => {e.currentTarget.style.filter = 'opacity(1)'; e.currentTarget.style.transform = 'scale(1.05)';}}
                        onMouseOut={e => {e.currentTarget.style.filter = 'opacity(0.6)'; e.currentTarget.style.transform = 'scale(1)';}}
                    />
                </div>
            </div>
            <div className="container" style={{ textAlign: 'center', borderTop: '1px solid #1E293B', paddingTop: '2.5rem', color: '#64748B', fontSize: '0.95rem' }}>
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
