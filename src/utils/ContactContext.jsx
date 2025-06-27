import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [showContact, setShowContact] = useState(false);

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);
  const toggleContact = () => setShowContact(!showContact);

  return (
    <ContactContext.Provider value={{ 
      showContact, 
      openContact, 
      closeContact, 
      toggleContact 
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact debe ser usado dentro de ContactProvider');
  }
  return context;
}; 