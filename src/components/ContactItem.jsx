import { FaBuildingColumns, FaEnvelope, FaGithub, FaLink, FaPhone } from "react-icons/fa6";

function getContactIcon(item) {
  const href = item.href.toLowerCase();
  const label = item.label.toLowerCase();

  if (href.startsWith("tel:")) {
    return FaPhone;
  }

  if (href.includes("github.com")) {
    return FaGithub;
  }

  if (label.includes("university")) {
    return FaBuildingColumns;
  }

  if (href.startsWith("mailto:")) {
    return FaEnvelope;
  }

  return FaLink;
}

function ContactItem({ item }) {
  const ContactIcon = getContactIcon(item);

  return (
    <li>
      <a className="contact-item" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
        <span className="contact-main">
          <ContactIcon className="inline-icon" aria-hidden="true" focusable="false" />
          <strong>{item.label}</strong>
        </span>
        <span className="contact-value">{item.value}</span>
      </a>
    </li>
  );
}

export default ContactItem;
