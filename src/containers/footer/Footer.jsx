import React from 'react';
import gpt3Logo from '../../logo-nav-myverse@0.75x.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="MyVerse Logo" />
        <p>The logo and all other Digital Entities are for solely Personal Use. All Rights Reserved.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social Links</h4>
        <p><a href="https://www.instagram.com/kaifshaikhhhh/" target="blank">InstaVerse</a></p>
        <p><a href="https://twitter.com/stepbrogotchill" target="blank">Twerse</a></p>
        <p><a href="https://www.linkedin.com/in/kaifshaikhhh/" target="blank">InVerse</a></p>
        <p><a href="https://www.github.com/kaifshaikhhhh/" target="blank">GitVerse</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Documentation</h4>
        <p><a href="https://www.termsofservicegenerator.net/live.php?token=zIYj6olMyW9W1Xp9yfMTjWzShiqIYLot" target="blank">Terms Of Service</a></p>
        <p><a href="https://www.freeprivacypolicy.com/live/8e7a6f76-d64f-4e63-a6fa-10d6e41c5099" target="blank">Privacy Policy</a></p>
        <p><a href="https://github.com/kaifshaikhhhh/myverse" target="blank">Github Repo</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><a href="mailto:kaifs0351@gmail.com">Mail is still sexy :)</a></p>
        <p><a href="tel:9307028688">5GVerse :)</a></p>
        <p><a href="https://drive.google.com/file/d/1N-epZoYKgk_x1OBxJMeaKa0NddLqe_Cb/view?usp=sharing" target="blank">My CV :)</a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>©2022 MyVerse. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
