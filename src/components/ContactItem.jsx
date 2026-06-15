import {
  FaArrowUpRightFromSquare,
  FaBuildingColumns,
  FaEnvelope,
  FaGithub,
  FaLink,
  FaPhone,
} from "react-icons/fa6";

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

  const external = item.href.startsWith("http");

  return (
    <li>
      <a
        className="contact-link"
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <span className="c-label">
          <ContactIcon className="inline-icon" aria-hidden="true" focusable="false" />
          <strong>{item.label}</strong>
        </span>
        <span className="c-value">{item.value}</span>
        <FaArrowUpRightFromSquare className="c-arrow" aria-hidden="true" focusable="false" />
      </a>
    </li>
  );
}

export default ContactItem;
