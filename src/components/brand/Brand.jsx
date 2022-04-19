import React from 'react';
import { python, react, git, js, figma } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={figma} />
    </div>
    <div>
      <img src={react} />
    </div>
    <div>
      <img src={git} />
    </div>
    <div>
      <img src={js} />
    </div>
    <div>
      <img src={python} />
    </div>
  </div>
);

export default Brand;
