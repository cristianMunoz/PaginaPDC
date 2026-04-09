import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Target, Globe2, Heart, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import bgImage from '../assets/worship_service_1772564956189.png';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="nosotros" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image with Dark Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                <img src={bgImage} alt="Worship Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Gradient Mask to blend with the page */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to bottom, var(--bg-main) 0%, rgba(15, 23, 42, 0.85) 50%, var(--bg-main) 100%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(220,38,38,0.1)', color: 'var(--primary)', borderRadius: '30px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem', border: '1px solid rgba(220,38,38,0.2)' }}
                    >
                        {t('about.title')}
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        style={{ fontSize: '3.5rem', marginTop: '0.5rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                    >
                        {t('about.main_title')}
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        style={{ height: '4px', background: 'var(--primary)', margin: '1.5rem auto 0', borderRadius: '2px', boxShadow: '0 0 10px var(--primary)' }}
                    ></motion.div>
                </div>

                {/* Mission and Vision Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>

                    {/* Mission Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '3.5rem 2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default', background: 'rgba(30, 41, 59, 0.7)' }} 
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(220,38,38,0.3)'; }} 
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                    >
                        <div style={{ background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.05) 100%)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--primary)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
                            <Target size={36} />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.2rem', color: '#ffffff', fontWeight: 'bold' }}>{t('about.mission_title')}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                            {t('about.mission_desc')}
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="glass surface" style={{ padding: '3.5rem 2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'default', background: 'rgba(30, 41, 59, 0.7)' }} 
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'; }} 
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                    >
                        <div style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.05) 100%)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--accent)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <Globe2 size={36} />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.2rem', color: '#ffffff', fontWeight: 'bold' }}>{t('about.vision_title')}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                            {t('about.vision_desc')}
                        </p>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
                    <motion.h3 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                        {t('about.values_title')}
                    </motion.h3>
                    <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: '60px' }} viewport={{ once: true }}
                        style={{ height: '3px', background: 'var(--accent)', margin: '1rem auto 0', borderRadius: '2px', boxShadow: '0 0 10px var(--accent)' }}
                    ></motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: t('about.val_integrity'), desc: t('about.val_integrity_desc'), color: '#3B82F6', icon: ShieldCheck },
                        { title: t('about.val_love'), desc: t('about.val_love_desc'), color: '#EF4444', icon: Heart },
                        { title: t('about.val_fellowship'), desc: t('about.val_fellowship_desc'), color: '#10B981', icon: Users },
                        { title: t('about.val_faithfulness'), desc: t('about.val_faithfulness_desc'), color: '#8B5CF6', icon: CheckCircle2 }
                    ].map((val, idx) => {
                        const IconComp = val.icon;
                        return (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                            key={idx}
                            className="glass surface"
                            style={{ padding: '3rem 2rem', borderRadius: '1.2rem', textAlign: 'center', transition: 'all 0.4s ease', background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = `0 15px 30px -10px ${val.color}40`; e.currentTarget.style.borderColor = `${val.color}60`; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                        >
                            {/* Decorative background glow per card */}
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `radial-gradient(circle, ${val.color}30 0%, transparent 70%)`, filter: 'blur(10px)' }}></div>
                            
                            <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(30,41,59,0.8) 100%)`, border: `1px solid ${val.color}40`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                                <IconComp size={32} color={val.color} style={{ filter: `drop-shadow(0 0 5px ${val.color}80)` }} />
                            </div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>{val.title}</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{val.desc}</p>
                        </motion.div>
                    )})}
                </div>

            </div>
        </section>
    );
};

export default About;
