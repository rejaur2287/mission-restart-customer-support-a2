import React from "react";
import inIcon from "../../assets/fi_145807.png";
import fbIcon from "../../assets/fi_5968764.png";
import xIcon from "../../assets/fi_5969020.png";
import emailIcon from "../../assets/fi_6244710.png";

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-1 md:grid-cols-[32%_16%_16%__16%_18%] gap-4 text-base-content justify-between w-11/12 mx-auto">
        <nav>
          <a class="text-2xl font-bold my-6" href="">
            CS — Ticket System
          </a>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>

        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
        <nav className="flex flex-col ">
          <h6 className="footer-title text-start">Social Links</h6>
          <a className="link link-hover flex items-center gap-4 mb-2">
            <img src={xIcon} alt="X" className="w-5 h-5" />
            @CS — Ticket System
          </a>

          <a className="link link-hover flex items-center gap-4 mb-2">
            <img src={inIcon} alt="LinkedIn" className="w-5 h-5" />
            @CS — Ticket System
          </a>

          <a className="link link-hover flex items-center gap-4 mb-2">
            <img src={fbIcon} alt="Facebook" className="w-5 h-5" />
            @CS — Ticket System
          </a>

          <a className="link link-hover flex items-center gap-4">
            <img src={emailIcon} alt="Email" className="w-5 h-5" />
            support@cst.com
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
