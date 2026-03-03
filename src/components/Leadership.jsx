import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';

const images = import.meta.glob('../assets/church_worship_hands_*.png', { eager: true, as: 'url' });
const imgArr = Object.values(images);
const leadershipBg = imgArr.length > 0 ? imgArr[0] : null;

const Leadership = () => {
    const { t } = useTranslation();

    return (
        <section id="liderazgo" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

            {leadershipBg && (
                <>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                        <img src={leadershipBg} alt="Worship Hands Background" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} />
                    </div>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to bottom, var(--bg-main) 10%, rgba(15, 23, 42, 0.8) 100%)' }}></div>
                </>
            )}

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                        {t('leadership.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }}
                        style={{ height: '4px', background: 'var(--accent)', margin: '0 auto' }}
                    ></motion.div>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '3rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>

                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5rem', fontWeight: 'bold', boxShadow: '0 10px 25px rgba(220, 38, 38, 0.4)' }}>
                            AG
                        </div>

                        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t('leadership.pastor_name')}</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: '600', marginBottom: '2rem' }}>{t('leadership.pastor_title')}</p>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                            {t('leadership.description')}
                        </p>

                        <a href="https://www.facebook.com/share/1H7jAA6voV/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.75rem 2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Facebook size={20} />
                            {t('leadership.fb_link')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
