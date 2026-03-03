import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
                    style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: heroBg ? '#FFFFFF' : 'var(--primary)', textShadow: heroBg ? '0 4px 6px rgba(0,0,0,0.5)' : 'none' }}>
                    {t('hero.title')}
                </motion.h1>

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
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <a href="#horarios" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                        {t('hero.btn')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
