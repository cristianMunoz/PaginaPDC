import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin } from 'lucide-react';

// Importing the photo attached by the user (Pastor preaching)
import heroBg from '../assets/media__1772566681362.jpg';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="inicio" style={{
            position: 'relative',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 0',
            overflow: 'hidden'
        }}>
            {heroBg && (
                <>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                        <img src={heroBg} alt="Pastor Preaching Background" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                    </div>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.5))' }}></div>
                </>
            )}

            <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '4.5rem', marginBottom: '0.5rem', color: heroBg ? '#FFFFFF' : 'var(--primary)', textShadow: heroBg ? '0 4px 6px rgba(0,0,0,0.5)' : 'none' }}>
                    {t('hero.title')}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)', marginBottom: '1.5rem' }}>
                    <MapPin size={20} color="#E2E8F0" />
                    <span style={{ color: '#E2E8F0', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.5)', letterSpacing: '0.05em' }}>Bogotá, Colombia</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.35rem', color: heroBg ? '#E2E8F0' : 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2.5rem auto', textShadow: heroBg ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}>
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                    
                    <a href="#horarios" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                        {t('hero.btn')}
                    </a>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <p style={{ color: heroBg ? '#E2E8F0' : 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, textShadow: heroBg ? '0 1px 2px rgba(0,0,0,0.5)' : 'none', fontWeight: '500', opacity: 0.9 }}>
                            {t('hero.follow')}
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <a href="https://www.facebook.com/share/1Kq8YP8Mhk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                               style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.2)' }} 
                               onMouseOver={e => {e.currentTarget.style.backgroundColor = '#1877F2'; e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = '#1877F2';}} 
                               onMouseOut={e => {e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';}}>
                                <Facebook size={24} />
                            </a>

                            <a href="https://www.instagram.com/ccristianapuertadelcielo?igsh=aGF1MzJibWlrd3Nj" target="_blank" rel="noopener noreferrer" 
                               style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.2)' }} 
                               onMouseOver={e => {e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'; e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = 'transparent';}} 
                               onMouseOut={e => {e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';}}>
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
