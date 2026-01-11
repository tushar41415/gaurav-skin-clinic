import React from 'react';

const WhatsAppButton = ({ phone = '918287818299', message }) => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Hello! I would like to know more about your services.');

  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppButton;
