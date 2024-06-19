import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '../ui/button';

interface ModalProps {
  message: string;
  onClose: () => void;
  time: string;
}

const Modal: React.FC<ModalProps> = ({ message, onClose, time }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{message}</h2>
        <p>{time}</p>
        <Button className="bg-blue-400 text-white mt-4" onClick={onClose}>
          Close
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
