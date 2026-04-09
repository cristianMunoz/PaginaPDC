import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Users } from 'lucide-react';
import bgImage from '../assets/leadership_bg.png';

const pastorsData = [
    {
        sede: 'Sede Central Santa Librada',
        names: 'Ps. Alex Gomez y Doris Gallego',
        title: 'Pastores Principales',
        fb: 'https://www.facebook.com/share/18C9YKXcaT/',
        ig: 'https://www.instagram.com/alexmiguelgomez?igsh=MTdkNWp1aTNmN2ZhaA==',
        imgId: 'librada.jpeg'
    },
    {
        sede: 'Sede El Bosque',
        names: 'Ps. Miguel Gómez y Dayanna Quintero',
        title: 'Pastores Locales',
        fb: null,
        imgId: 'bosque.jpeg'
    },
    {
        sede: 'Sede Sucre',
        names: 'Ps. Arnoldo Ariza y Marcela Quiroga',
        title: 'Pastores Locales',
        fb: null,
        imgId: 'sucre.jpeg'
    }
];

const Leadership = () => {
    const { t } = useTranslation();
    const [imgErrors, setImgErrors] = useState({});

    const handleImgError = (idx) => {
        setImgErrors(prev => ({ ...prev, [idx]: true }));
    };

    return (
        <section id="liderazgo" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                <img src={bgImage} alt="Leadership Background" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to bottom, var(--bg-main) 0%, rgba(15, 23, 42, 0.85) 100%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                        {t('leadership.main_title')}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }}
                        style={{ height: '4px', background: 'var(--accent)', margin: '0 auto' }}
                    ></motion.div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', fontSize: '1.1rem', maxWidth: '700px', margin: '2rem auto 0 auto' }}>
                        {t('leadership.desc')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {pastorsData.map((pastor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="glass surface" style={{ padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                            
                            {/* Tag de la Sede */}
                            <div style={{ 
                                position: 'absolute', 
                                top: '-15px', 
                                left: '50%', 
                                transform: 'translateX(-50%)', 
                                backgroundColor: index === 0 ? 'var(--primary)' : 'var(--accent)', 
                                color: 'white', 
                                padding: '0.4rem 1.2rem', 
                                borderRadius: '20px', 
                                fontSize: '0.9rem', 
                                fontWeight: 'bold', 
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                zIndex: 2
                            }}>
                                {pastor.sede}
                            </div>

                            {/* Foto o Icono */}
                            <div style={{ 
                                width: '100%', 
                                height: '220px', 
                                borderRadius: '12px', 
                                background: 'rgba(255,255,255,0.05)', 
                                margin: '1.5rem auto 1.5rem auto', 
                                position: 'relative',
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                color: 'var(--text-primary)',
                                overflow: 'hidden',
                                border: `3px solid ${index === 0 ? 'var(--primary)' : 'var(--accent)'}`,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                            }}>
                                {!imgErrors[index] ? (
                                    <img 
                                        src={`/team/${pastor.imgId}`} 
                                        alt={pastor.names} 
                                        onError={() => handleImgError(index)}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                                    />
                                ) : (
                                    <Users size={50} style={{ opacity: 0.6 }} />
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: '1.3' }}>{pastor.names}</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: '600', marginBottom: '1.5rem' }}>{pastor.title}</p>

                            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
                                {pastor.fb && (
                                    <a href={pastor.fb} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', position: 'relative', zIndex: 20 }}>
                                        <Facebook size={18} />
                                        {t('leadership.fb_link')}
                                    </a>
                                )}
                                {pastor.ig && (
                                    <a href={pastor.ig} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', position: 'relative', zIndex: 20 }}>
                                        <Instagram size={18} />
                                        {t('leadership.ig_link')}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
