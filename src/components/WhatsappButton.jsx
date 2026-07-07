import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919385998524?text=Hi, I am interested in your plots."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsappButton;
