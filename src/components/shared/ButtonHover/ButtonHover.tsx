"use client"
import { motion } from 'framer-motion';

interface ButtonHoverProps {
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick handler
}

const ButtonHover: React.FC<ButtonHoverProps> = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: '#4B5563', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-fit rounded-lg"
    >
      {children}
    </motion.button>
  );
};

export default ButtonHover;
