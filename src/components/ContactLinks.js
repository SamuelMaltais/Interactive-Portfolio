import githubLogo from "../images/github.png";
import facebookLogo from "../images/facebook.png";
import linkedLogo from "../images/linked.png";
import "./ContactLinks.css";

function ContactLinks() {
  return (
    <div className="contact-links">
      <a href="https://github.com/SamuelMaltais/" target="_blank">
        <img
          src={githubLogo}
          height={35}
          width={35}
          className="contact-link"
          alt=""
        ></img>
      </a>
      <a href="https://open.kattis.com/users/samuel-maltais" target="_blank">
        <img
          src={facebookLogo}
          height={35}
          width={35}
          className="contact-link"
          alt=""
        ></img>
      </a>
      <a
        href="https://www.linkedin.com/in/samuel-maltais-a144ab1b1"
        target="_blank"
      >
        <img
          src={linkedLogo}
          height={35}
          width={35}
          className="contact-link"
          alt=""
        ></img>
      </a>
    </div>
  );
}

export default ContactLinks;
