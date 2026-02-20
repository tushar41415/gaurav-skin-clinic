const WhatsAppButton = ({ phone = "918287118299", message }) => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hi! I want consultation for hair/skin treatment.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
