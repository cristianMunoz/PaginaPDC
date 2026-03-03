import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Target, Globe2, Heart, ShieldCheck, Users } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="nosotros" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)' }}>
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>{t('about.title')}</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>Nuestra Identidad</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '1.5rem auto 0', borderRadius: '2px' }}></div>
                </div>

                {/* Mission and Vision Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                    {/* Mission Card */}
                    <div className="surface" style={{ padding: '3rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ background: 'rgba(220, 38, 38, 0.1)', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <Target size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('about.mission_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            {t('about.mission_desc')}
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="surface" style={{ padding: '3rem 2rem', borderRadius: '1rem', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                            <Globe2 size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('about.vision_title')}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            {t('about.vision_desc')}
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>{t('about.values_title')}</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: t('about.val_integrity'), desc: t('about.val_integrity_desc'), color: '#3B82F6', icon: <ShieldCheck size={40} color="#3B82F6" style={{ margin: '0 auto 1.5rem' }} /> },
                        { title: t('about.val_love'), desc: t('about.val_love_desc'), color: '#EF4444', icon: <Heart size={40} color="#EF4444" style={{ margin: '0 auto 1.5rem' }} /> },
                        { title: t('about.val_fellowship'), desc: t('about.val_fellowship_desc'), color: '#10B981', icon: <Users size={40} color="#10B981" style={{ margin: '0 auto 1.5rem' }} /> },
                        { title: t('about.val_faithfulness'), desc: t('about.val_faithfulness_desc'), color: '#8B5CF6', icon: <CheckCircle2 size={40} color="#8B5CF6" style={{ margin: '0 auto 1.5rem' }} /> }
                    ].map((val, idx) => (
                        <div
                            key={idx}
                            className="surface"
                            style={{ padding: '2.5rem 2rem', borderRadius: '1rem', textAlign: 'center', transition: 'all 0.3s ease' }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
                        >
                            {val.icon}
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{val.title}</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>{val.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
