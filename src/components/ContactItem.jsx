function ContactItem({ item }) {
  return (
    <li>
      <a className="contact-item" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
        <strong>{item.label}</strong>
        <span>{item.value}</span>
      </a>
    </li>
  );
}

export default ContactItem;
