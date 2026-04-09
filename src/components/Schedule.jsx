import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Repurposing AI worship service background into the Schedule
const images = import.meta.glob('../assets/worship_service_*.png', { eager: true, as: 'url' });
const imgArr = Object.values(images);
const scheduleBg = imgArr.length > 0 ? imgArr[0] : null;

const schedulesData = {
    'sta-librada': {
        name: 'Sede Central Santa Librada',
        meetings: [
            { day: 'Miércoles', desc: 'Noche de Oración', time: '7:00 PM' },
            { day: 'Sábado', desc: 'Ayuno y Oración', time: '8:30 AM' },
            { day: 'Domingo', desc: 'Escuela Dominical', time: '7:00 AM y 9:00 AM' }
        ]
    },
    'sucre': {
        name: 'Sede Sucre',
        meetings: [
            { day: 'Jueves', desc: 'Noche de Oración', time: '6:00 PM' },
            { day: 'Sábado', desc: 'Ayuno y Oración', time: '8:30 AM' },
            { day: 'Domingo', desc: 'Escuela Dominical', time: '7:00 AM y 9:00 AM' }
        ]
    },
    'el-bosque': {
        name: 'Sede El Bosque',
        meetings: [
            { day: 'Martes', desc: 'Noche de Oración', time: '6:00 PM' },
            { day: 'Sábado', desc: 'Ayuno y Oración', time: '8:30 AM' },
            { day: 'Domingo', desc: 'Escuela Dominical', time: '7:00 AM y 9:00 AM' }
        ]
    }
};

const sedesConfig = [
    { id: 'sta-librada', label: 'Santa Librada' },
    { id: 'el-bosque', label: 'El Bosque' },
    { id: 'sucre', label: 'Sucre' }
];

const Schedule = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('sta-librada');

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
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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

                {/* Tabs / Selector de Sedes */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {sedesConfig.map((sede) => (
                        <button
                            key={sede.id}
                            onClick={() => setActiveTab(sede.id)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '30px',
                                border: '2px solid',
                                borderColor: activeTab === sede.id ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                                backgroundColor: activeTab === sede.id ? 'rgba(220, 38, 38, 0.1)' : 'transparent',
                                color: activeTab === sede.id ? 'var(--primary)' : 'var(--text-primary)',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {sede.label}
                        </button>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                        {schedulesData[activeTab].name}
                    </h3>
                </div>

                {/* Grid de Horarios */}
                <div style={{ position: 'relative', minHeight: '180px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}
                        >
                            {schedulesData[activeTab].meetings.map((meeting, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="glass surface" style={{ 
                                        padding: '2.5rem', 
                                        borderRadius: '16px', 
                                        textAlign: 'center', 
                                        border: index === 2 ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)' 
                                    }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{meeting.day}</h3>
                                    <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>{meeting.desc}</p>
                                    <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{meeting.time}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
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
