import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer padding">
      <div className="footer-wrapper">
        <div className="footer-contact">
          <h3>Wanna know more?</h3>
          <h4>Contact me now</h4>
          <div className="social">
            <Link href="https://www.linkedin.com/in/deea-emilia-duta/">
              <Image
                src="assets/images/linkedin.svg"
                alt="linkedin logo"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://github.com/DeeaEmilia">
              <Image
                src="assets/images/github.svg"
                alt="github logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright &copy; 2023 Andreea-Emilia Duta. All rights reserved.</p>
        </div>

        <div className="project">
          <p>See more projects here:</p>
          <Link
            href="https://andreea-emilia-duta.netlify.app/"
            className="link">
            Portfolio
          </Link>
        </div>
      </div>
      <p className="signature">Deea-Emilia</p>
    </footer>
  );
};

export default Footer;
