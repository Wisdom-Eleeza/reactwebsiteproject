import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        cupiditate dolor quo obcaecati nulla qui labore adipisci deleniti neque
        non.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:whiy07@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
            <a href="https://m.me/wisdom.eleeza" target="_blank" rel="noreferrer"><BsMessenger /></a>
            <a href="https://wa.me/+233" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
