import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const images = import.meta.glob('../assets/modern_church_stage_*.png', { eager: true, as: 'url' });
const imgArr = Object.values(images);
const contactBg = imgArr.length > 0 ? imgArr[0] : null;

const Contact = () => {
    const { t } = useTranslation();

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
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>{t('contact.info_title')}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <MapPin className="text-primary" size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('contact.address')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Carrera 9a 75-56 sur, Santa Librada<br />Bogotá, Colombia</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Phone className="text-primary" size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('contact.phone')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+57 320 4538023</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Mail className="text-primary" size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('contact.email')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>fundacielo@hotmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Clock className="text-primary" size={24} style={{ flexShrink: 0, color: 'var(--primary)', marginTop: '4px' }} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Horarios</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Miércoles, Sábado y Domingo</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.18241470402!2d-74.12317!3d4.515179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa22e24ff34b7%3A0x27dc4403126b6270!2sIglesia%20Cristiana%20Puerta%20del%20Cielo%20Sede%20Central%20Santa%20Librada!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Church Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="glass surface" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>{t('contact.form_title')}</h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.name')}</label>
                                <input type="text" className="input-field" placeholder={t('contact.name_ph')} required />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.email')}</label>
                                <input type="email" className="input-field" placeholder={t('contact.email_ph')} required />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.form_phone')}</label>
                                <input type="tel" className="input-field" placeholder={t('contact.form_phone_ph')} />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact.message')}</label>
                                <textarea className="input-field" rows="4" placeholder={t('contact.message_ph')} required style={{ resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                                {t('contact.submit')}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
