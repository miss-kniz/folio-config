"use client";

import React from "react";
import Modal from "./Modal";
import ContactSection from "../sections/ContactSection";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Me">
      <ContactSection />
    </Modal>
  );
};

export default ContactModal;
