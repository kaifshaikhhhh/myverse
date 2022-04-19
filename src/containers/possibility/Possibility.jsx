import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>&ldquo;MetaVerse is the Future&rdquo; -- FactsCheck</h4>
      <h1 className="gradient__text">What are our plans about extending MyVerse?</h1>
      <p>In a virtual space you can pretty much do anything like Upload Data, Host an Event, Stream Live, design a Public Gallery, record and upload Music, publish Blogs and Articles and much more. All of this or any 3rd party website or app providing this service can be hooked up to MyVerse.</p>
      <p>So the Future plans are about extending and integrating all of this into MyVerse as time passes. The concept of owning a private space with no restrictions can help you express out yourself much better than any other place all over Web.</p>
      <p>Another Plan is to create a marketplace for NFT&apos;s and several unique Blockchain assets that make a decent profit for the MyVerse user. Hashing Crypto is another proposal that can be ideated in the later times. </p>
      <p>This is again a whole concept that I believe to bring in reality (Uhm... I mean on a virtual scale but ludicrous) so, I&apos;d love it if anyone of you wanted to contribute in our project.</p>
      <h4><b>This Webpage is consists of <a href="#features">My Portfolio</a> as well as my idea of <a href="#wgpt3">MyVerse.</a></b></h4>
    </div>
  </div>
);

export default Possibility;
