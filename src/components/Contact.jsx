import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';

const images = import.meta.glob('../assets/modern_church_stage_*.png', { eager: true, as: 'url' });
const imgArr = Object.values(images);
const contactBg = imgArr.length > 0 ? imgArr[0] : null;

const locationsData = {
    'sta-librada': {
        name: 'Santa Librada',
        title: 'Sede Central Santa Librada',
        address: 'Carrera 9a # 75-56 sur',
        city: 'Bogotá, Colombia',
        mapIframeParams: 'pb=!1m18!1m12!1m3!1d15909.18241470402!2d-74.12317!3d4.515179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa22e24ff34b7%3A0x27dc4403126b6270!2sIglesia%20Cristiana%20Puerta%20del%20Cielo%20Sede%20Central%20Santa%20Librada!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco',
        link: 'https://maps.app.goo.gl/UMAqTqsQm27iuE3s6'
    },
    'sucre': {
        name: 'Sucre',
        title: 'Sede Sucre',
        address: 'Calle 112 sur #6-04',
        city: 'Sucre, Bogotá, Colombia',
        mapIframeParams: 'pb=!1m18!1m12!1m3!1d15910!2d-74.1156531!3d4.4897786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa3dda38d177f%3A0xcbdc846c8cc452df!2sIglesia%20Cristiana%20Puerta%20De%20Cielo!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco',
        link: 'https://maps.app.goo.gl/BfXizhYjdtxovZDf6'
    },
    'el-bosque': {
        name: 'El Bosque',
        title: 'Sede El Bosque',
        address: 'Carrera 7 d # 87 G -08 sur',
        city: 'El Bosque, Bogotá, Colombia',
        mapIframeParams: 'pb=!1m18!1m12!1m3!1d15910!2d-74.1006855!3d4.5051172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa3ca7f3971a1%3A0x3a0411722bdf789a!2sPuerta%20Del%20Cielo!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco',
        link: 'https://maps.app.goo.gl/oKgEa4MAoi9D71NQ9'
    }
};

const sedesConfig = [
    { id: 'sta-librada' },
    { id: 'el-bosque' },
    { id: 'sucre' }
];

const Contact = () => {
    const { t } = useTranslation();
    const [activeLocation, setActiveLocation] = useState('sta-librada');
    const currentLoc = locationsData[activeLocation];
    
    // Form submission state
    const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ state: 'submitting', message: '' });
        
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xdapvbyg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus({ state: 'success', message: '¡Tu mensaje ha sido enviado con éxito!' });
                form.reset();
            } else {
                setFormStatus({ state: 'error', message: 'Hubo un error al enviar tu mensaje. Inténtalo de nuevo.' });
            }
        } catch (error) {
            setFormStatus({ state: 'error', message: 'Hubo un error de red al intentar enviar tu mensaje.' });
        }
    };

    const handleInvalid = (e, msgKey) => {
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity(t('contact.val_required'));
        } else {
            e.target.setCustomValidity(t(msgKey));
        }
    };

    return (
        <section id="contacto" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

            {contactBg && (
                <>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                        <img src={contactBg} alt="Church Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to top, var(--bg-main) 20%, rgba(15, 23, 42, 0.9) 100%)' }}></div>
                </>
            )}

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                        {t('contact.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }} whileInView={{ width: '80px' }} viewport={{ once: true }}
                        style={{ height: '4px', background: 'var(--accent)', margin: '0 auto' }}
                    ></motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{t('contact.info_title')}</h3>

                        {/* Tabs de Sedes para la Dirección */}
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            {sedesConfig.map((sede) => (
                                <button
                                    key={sede.id}
                                    onClick={() => setActiveLocation(sede.id)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        border: '1px solid',
                                        borderColor: activeLocation === sede.id ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                        backgroundColor: activeLocation === sede.id ? 'rgba(220, 38, 38, 0.1)' : 'rgba(0,0,0,0.2)',
                                        color: activeLocation === sede.id ? 'var(--primary)' : 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {locationsData[sede.id].name}
                                </button>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            
                            {/* Información Específica de la Sede */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeLocation}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                                >
                                    <MapPin size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                    <div>
                                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{currentLoc.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{currentLoc.address}<br />{currentLoc.city}</p>
                                        <a href={currentLoc.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold' }}>
                                            <ExternalLink size={16} /> Abrir en Google Maps
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

                            {/* Información Global */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Phone size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('contact.phone')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+57 320 4538023 <br/> +57 311 2490317</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Mail size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('contact.email')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>fundacielo@hotmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Mapa Dinámico iframe */}
                        <div style={{ marginTop: '2.5rem', position: 'relative', height: '200px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden' }}>
                            <AnimatePresence mode="wait">
                                <motion.iframe
                                    key={activeLocation}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    src={
                                        currentLoc.mapIframeParams 
                                        ? `https://www.google.com/maps/embed?${currentLoc.mapIframeParams}`
                                        : `https://maps.google.com/maps?q=${encodeURIComponent(currentLoc.mapIframeQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                                    }
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Ubicación ${currentLoc.name}`}
                                />
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>{t('contact.form_title')}</h3>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Honeypot field para atrapar bots */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />
                            
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.name')}</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="input-field" 
                                    placeholder={t('contact.name_ph')} 
                                    required 
                                    maxLength="100"
                                    pattern="^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$"
                                    title={t('contact.val_name')}
                                    onInvalid={(e) => handleInvalid(e, 'contact.val_name')}
                                    onInput={(e) => {
                                        e.target.setCustomValidity('');
                                        e.target.value = e.target.value.replace(/[^A-Za-záéíóúÁÉÍÓÚñÑ\s]/g, '');
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.email')}</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="input-field" 
                                    placeholder={t('contact.email_ph')} 
                                    required 
                                    maxLength="150"
                                    onInvalid={(e) => handleInvalid(e, 'contact.val_email')}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.form_phone')}</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    className="input-field" 
                                    placeholder={t('contact.form_phone_ph')} 
                                    required
                                    maxLength="20"
                                    pattern="^[0-9+\-\s()]+$"
                                    title={t('contact.val_phone')}
                                    onInvalid={(e) => handleInvalid(e, 'contact.val_phone')}
                                    onInput={(e) => {
                                        e.target.setCustomValidity('');
                                        e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.message')}</label>
                                <textarea 
                                    name="message" 
                                    className="input-field" 
                                    rows="4" 
                                    placeholder={t('contact.message_ph')} 
                                    required 
                                    maxLength="1000"
                                    style={{ resize: 'vertical' }}
                                    onInvalid={(e) => handleInvalid(e, 'contact.val_required')}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                ></textarea>
                            </div>

                            {formStatus.state === 'success' && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '8px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={20} />
                                    <span>{formStatus.message}</span>
                                </motion.div>
                            )}

                            {formStatus.state === 'error' && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '8px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <AlertCircle size={20} />
                                    <span>{formStatus.message}</span>
                                </motion.div>
                            )}

                            <button type="submit" disabled={formStatus.state === 'submitting' || formStatus.state === 'success'} className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center', opacity: (formStatus.state === 'submitting' || formStatus.state === 'success') ? 0.7 : 1, cursor: formStatus.state === 'success' ? 'not-allowed' : 'pointer' }}>
                                {formStatus.state === 'submitting' ? 'Enviando...' : formStatus.state === 'success' ? 'Mensaje Enviado ✓' : t('contact.submit')}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
