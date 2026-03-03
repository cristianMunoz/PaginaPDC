import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Repurposing AI worship service background into the Schedule
const images = import.meta.glob('../assets/worship_service_*.png', { eager: true, as: 'url' });
const imgArr = Object.values(images);
const scheduleBg = imgArr.length > 0 ? imgArr[0] : null;

const Schedule = () => {
    const { t } = useTranslation();

    return (
        <section id="horarios" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

            {scheduleBg && (
                <>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                        <img src={scheduleBg} alt="Worship Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'var(--bg-main)', opacity: 0.88 }}></div>
                </>
            )}

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                        {t('schedule.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }}
                        style={{ height: '4px', background: 'var(--accent)', margin: '0 auto' }}
                    ></motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>

                    <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('schedule.wed')}</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t('schedule.wed_desc')}</p>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>7:00 PM</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('schedule.sat')}</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t('schedule.sat_desc')}</p>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>8:30 AM</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', border: '2px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('schedule.sun')}</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t('schedule.sun_desc')}</p>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>7:00 AM y 9:00 AM</p>
                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{t('schedule.footer_note')}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
