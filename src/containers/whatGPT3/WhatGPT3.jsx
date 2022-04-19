import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="So what is MyVerse? The InfoVerse" text="MyVerse is a concept of owning a space in the Virtual World as I call MetaVerse. One can use it for their own usage like I use it for showcasing my Work, Certifications, Published Articles, Skills, Projects, Memories, NFT's, Coin Wallets, Gaming and one could go on exponentially about it." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond Thinking & Imagination.</h1>
      <p><a href="#features">Enter the SkillVerse</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Didn't get it?" text="MyVerse is simply a portfolio blog but exists with extended features and gives off a cooler vibe to the website as well to the ones who are viewing it." />
      <Feature title="Is everything ready?" text="Good things take and great things take further more. So, you know the grind, overall it's something which is endless so I'll keep contributing and extending the concept of it." />
      <Feature title="Can I contribute?" text="If you are a developer with a sense of passion and slight craziness or representing an organization who's interested to invest their time in it are free to contribute in this." />
    </div>
  </div>
);

export default WhatGPT3;
