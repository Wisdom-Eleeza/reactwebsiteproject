import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptas quia consequatur aperiam nobis porro error sint cum
            temporibus repellat?
          </p>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/wisdom-eleeza-56158a256/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
            <a href="https://www.facebook.com/wisdom.eleeza" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
            <a href="https://twitter.com/WhizyMadeit" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
            <a href="https://www.instagram.com/whizymadeit/?next=%2F" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
          </div>
        </article>

        <article>
            <h4>Permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/Plans'>Plans</Link>
            <Link to='/trainers'>Trainers</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>

        <article>
            <h4>Insights</h4>
            <Link to='/s'>Blog</Link>
            <Link to='/s'>Case Studies</Link>
            <Link to='/s'>Events</Link>
            <Link to='/s'>Communities</Link>
            <Link to='/s'>FAQs</Link>
        </article>

        <article>
            <h4>Get in Touch</h4>
            <Link to='/s'>Contact Us</Link>
            <Link to='/s'>Support</Link>
        </article>
      </div>

      <div className="footer__copyright">
        <small>2023 Wisdom Eleeza &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
