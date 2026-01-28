// Contact.jsx
import { PROFILE } from "../../data/profile";

function Contact({ onShare }) {
  return (
    <div className="contact">
      <div className="socials">
        {PROFILE.socials.map((social) => (
          <a
            key={social.type}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <i className={social.iconClass}></i>
          </a>
        ))}
        <a onClick={onShare}>
          <i className="fa-solid fa-share-nodes"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
