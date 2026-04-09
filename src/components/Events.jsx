import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/events_bg.png';

// Leer todas las imágenes directamente de la carpeta (en tiempo de compilación/desarrollo)
const imagesMap = import.meta.glob('../assets/events/*.{png,jpg,jpeg,webp,gif}', { 
    eager: true, 
    import: 'default' 
});
const eventImages = Object.values(imagesMap);

const Events = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventImages.length) % eventImages.length);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    // Auto-play de las imágenes
    useEffect(() => {
        if (!isPlaying || eventImages.length <= 1) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex, isPlaying]);

    // Variantes para la animación de framer-motion
    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    // Si no hay imágenes en la carpeta, mostramos un mensaje o nada
    if (eventImages.length === 0) {
        return (
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-alt)' }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>{t('events_section.title')}</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '1.5rem auto 3rem', borderRadius: '2px' }}></div>
                    <div className="surface" style={{ padding: '4rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.7 }}>
                        <ImageIcon size={64} style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }} />
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{t('events_section.empty')}<br/><span style={{fontSize: '0.9rem'}}>Agrega imágenes en la carpeta `src/assets/events`</span></p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="eventos" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image with Dark Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
                <img src={bgImage} alt="Events Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Gradient Mask */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent)', borderRadius: '30px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                        {t('events_section.tag')}
                    </span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{t('events_section.title')}</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '1rem auto 0', borderRadius: '2px', boxShadow: '0 0 10px var(--accent)' }}></div>
                </div>

                {/* Carousel Container */}
                <div 
                    style={{ 
                        position: 'relative', 
                        width: '100%', 
                        maxWidth: '900px', 
                        margin: '0 auto', 
                        aspectRatio: '16/10', // Mantener una proporción visual agradable
                        borderRadius: '1.5rem', 
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        backgroundColor: '#111' // Fondo oscuro base
                    }}
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {/* Capa de fondo borroso adaptativa usando la misma imagen */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: -20, left: -20, right: -20, bottom: -20,
                                    backgroundImage: `url(${eventImages[currentIndex]})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    filter: 'blur(20px) brightness(0.6)',
                                    zIndex: 0
                                }}
                            />
                            
                            {/* Imagen principal nítida */}
                            <img 
                                src={eventImages[currentIndex]} 
                                alt={`Evento ${currentIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    zIndex: 1,
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Controles del Carrusel (Solo si hay más de 1 imagen) */}
                    {eventImages.length > 1 && (
                        <>
                            {/* Overlay degradado debajo para que destaquen los botones */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '100px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                zIndex: 2,
                                pointerEvents: 'none'
                            }}></div>

                            {/* Botón Play/Pause */}
                            <button
                                onClick={togglePlay}
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    zIndex: 3,
                                    background: 'rgba(255,255,255,0.2)',
                                    backdropFilter: 'blur(10px)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                            >
                                {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '3px' }} />}
                            </button>

                            {/* Botones Anterior / Siguiente */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                zIndex: 3,
                                display: 'flex',
                                gap: '10px'
                            }}>
                                <button
                                    onClick={handlePrev}
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(10px)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '45px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(10px)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '45px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Indicadores de Puntuación (Subtle Dots) */}
                            <div style={{
                                position: 'absolute',
                                bottom: '33px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '8px',
                                zIndex: 3
                            }}>
                                {eventImages.map((_, idx) => (
                                    <div 
                                        key={idx}
                                        onClick={() => {
                                            setDirection(idx > currentIndex ? 1 : -1);
                                            setCurrentIndex(idx);
                                        }}
                                        style={{
                                            width: currentIndex === idx ? '20px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            backgroundColor: currentIndex === idx ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Events;
