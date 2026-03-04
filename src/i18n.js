import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "navbar": {
                "home": "Inicio",
                "about": "Nosotros",
                "schedule": "Horarios",
                "contact": "Contacto",
                "visit": "Visítanos"
            },
            "hero": {
                "title": "Iglesia Cristiana Puerta del Cielo",
                "subtitle": "Una iglesia conformada por gente que ama a Dios y a su prójimo. Bienvenidos a nuestra familia, sede central Santa Librada.",
                "btn": "Conoce nuestros horarios"
            },
            "about": {
                "title": "Identidad",
                "mission_title": "Nuestra Misión",
                "mission_desc": "Somos una Iglesia que proclama la Palabra de Dios; comprometida con la evangelización y transformación de nuestra comunidad.",
                "vision_title": "Nuestra Visión",
                "vision_desc": "Nos vemos como una iglesia influyente en la localidad de Usme, involucrada en extender el Reino de Dios en nuestra nación y el mundo.",
                "values_title": "Nuestros Valores",
                "val_integrity": "Integridad:",
                "val_integrity_desc": "Nuestros hechos dicen más que nuestras palabras.",
                "val_love": "Amor:",
                "val_love_desc": "Amamos a Dios y a nuestro prójimo.",
                "val_fellowship": "Compañerismo:",
                "val_fellowship_desc": "Trabajamos en equipo.",
                "val_faithfulness": "Fidelidad:",
                "val_faithfulness_desc": "Nuestro compromiso es con Dios, Su Palabra y la Iglesia."
            },
            "schedule": {
                "title": "Nuestros Horarios",
                "wed": "Miércoles",
                "wed_desc": "Servicio de Oración",
                "sat": "Sábado",
                "sat_desc": "Ayuno y Oración",
                "sun": "Domingo",
                "sun_desc": "Escuela Dominical",
                "footer_note": "Consejería con cita previa al número de contacto de la iglesia."
            },
            "leadership": {
                "title": "Liderazgo",
                "pastor_name": "Pastor Alex Gomez",
                "pastor_title": "Pastor Principal",
                "description": "Nos guía espiritualmente bajo la cobertura de las Asambleas de Dios, sirviendo con amor a la congregación y a la localidad de Usme.",
                "fb_link": "Seguir en Facebook"
            },
            "contact": {
                "title": "Contacto y Ubicación",
                "info_title": "Información",
                "address": "Dirección",
                "address_desc": "Sede Central Santa Librada",
                "phone": "Teléfono",
                "form_title": "Escríbenos",
                "name": "Nombre",
                "name_ph": "Tu nombre completo",
                "email": "Correo Electrónico",
                "email_ph": "tu@email.com",
                "form_phone": "Teléfono",
                "form_phone_ph": "Tu número de contacto",
                "message": "Mensaje",
                "message_ph": "¿En qué te podemos ayudar?",
                "submit": "Enviar Mensaje"
            },
            "footer": {
                "rights": "Iglesia Cristiana Puerta del Cielo. Todos los derechos reservados."
            }
        }
    },
    en: {
        translation: {
            "navbar": {
                "home": "Home",
                "about": "About Us",
                "schedule": "Schedule",
                "contact": "Contact",
                "visit": "Visit Us"
            },
            "hero": {
                "title": "Christian Church Gate of Heaven",
                "subtitle": "A church made up of people who love God and their neighbor. Welcome to our family, central campus Santa Librada.",
                "btn": "See our schedule"
            },
            "about": {
                "title": "Identity",
                "mission_title": "Our Mission",
                "mission_desc": "We are a Church that proclaims the Word of God; committed to the evangelization and transformation of our community.",
                "vision_title": "Our Vision",
                "vision_desc": "We see ourselves as an influential church in the locality of Usme, involved in extending the Kingdom of God in our nation and the world.",
                "values_title": "Our Values",
                "val_integrity": "Integrity:",
                "val_integrity_desc": "Our deeds speak louder than our words.",
                "val_love": "Love:",
                "val_love_desc": "We love God and our neighbor.",
                "val_fellowship": "Fellowship:",
                "val_fellowship_desc": "We work as a team.",
                "val_faithfulness": "Faithfulness:",
                "val_faithfulness_desc": "Our commitment is to God, His Word, and the Church."
            },
            "schedule": {
                "title": "Our Schedule",
                "wed": "Wednesday",
                "wed_desc": "Prayer Service",
                "sat": "Saturday",
                "sat_desc": "Fasting and Prayer",
                "sun": "Sunday",
                "sun_desc": "Sunday School",
                "footer_note": "Counseling by appointment via the church contact number."
            },
            "leadership": {
                "title": "Leadership",
                "pastor_name": "Pastor Alex Gomez",
                "pastor_title": "Lead Pastor",
                "description": "Guides us spiritually under the covering of the Assemblies of God, serving the congregation and the Usme locality with love.",
                "fb_link": "Follow on Facebook"
            },
            "contact": {
                "title": "Contact and Location",
                "info_title": "Information",
                "address": "Address",
                "address_desc": "Central Campus Santa Librada",
                "phone": "Phone",
                "form_title": "Write to us",
                "name": "Name",
                "name_ph": "Your full name",
                "email": "Email",
                "email_ph": "you@email.com",
                "form_phone": "Phone",
                "form_phone_ph": "Your phone number",
                "message": "Message",
                "message_ph": "How can we help you?",
                "submit": "Send Message"
            },
            "footer": {
                "rights": "Christian Church Gate of Heaven. All rights reserved."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: "es",
        interpolation: { escapeValue: false }
    });

export default i18n;
