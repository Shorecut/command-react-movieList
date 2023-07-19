import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a target="_blank" href="https://pnrtscr.com/kqrkc7">
          <img
            width={53}
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt=""
          />
        </a>
        <a target="_blank" href="https://onlyfans.com/onlyfans">
          <img
            width={60}
            src="https://www.svgrepo.com/show/504487/instagram.svg"
            alt=""
          />
        </a>
        <a target="_blank" href="https://trap-thecat.com/">
          <img
            width={60}
            src="https://www.svgrepo.com/show/513089/youtube-168.svg"
            alt=""
          />
        </a>
      </div>
      <div className="footer_menu">
        <p className="footer_menu__item footer_item__text">Blog</p>
        <p className="footer_menu__item footer_item__text">Time</p>
        <p className="footer_menu__item footer_item__text">Company</p>
        <p className="footer_menu__item footer_item__text">History</p>
        <p className="footer_menu__item footer_item__text">Security</p>
      </div>
      <p className="footer_item__text">© 2023 Company, Inc</p>
    </div>
  );
};

export default Footer;
