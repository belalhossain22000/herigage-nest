"use client"
import { motion } from 'framer-motion';

interface CardHoverProps {
  children: React.ReactNode;
}

const CardHover: React.FC<CardHoverProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        
        transition: { duration: 0.3 },
      }}
      className="bg-white p-6 rounded-lg  cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default CardHover;
