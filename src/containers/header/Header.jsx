import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Greetings to my Virtual Locus proudly named as MyVerse</h1>
      <p>MyVerse is my personal space that shows around my skills and accomplishments. Basically a portfolio but gives off a MetaV3rse vibe. Make sure to check out my GitHub to View all of my projects. Lastly, I am just a college student and Front-end is not my thing.</p>

      <div className="gpt3__header-content__input">
        <button type="button"><a href="https://linktr.ee/kaif.spotify" target="blank">View my Spotify Playlist Creations</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <p>Tools are mentioned below that aided in development of MyVerse</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
