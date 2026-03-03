import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }} // Triggers when 15% visible
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
