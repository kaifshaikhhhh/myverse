import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">For all the Readers out there, <br /> Bringing the WriterVerse to you!</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} text="WriterVerse Owner - Kaif Shaikh - Make sure to check my published articles out on Medium." desc="I publish Tech and Design related articles on Medium drawn out on my experiences with various stuff like Working in Motion Graphics or The concept of Artificial Intelligence and it&apos;s subsets. Writing out Articles that you might like if you're deeply invested in Technology and Graphic Designing." link="https://kaifshaikhhhh.medium.com/" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 10, 2022" text="Creating your own MoGraphics Portfolio." link="https://kaifshaikhhhh.medium.com/building-your-own-motion-graphics-portfolio-88df0b65f98b" />
        <Article imgUrl={blog03} date="Dropping in Soon" text="C++ or Python | Not a tough choice." />
        <Article imgUrl={blog04} date="Dropping in Soon" text="What is AI? ML? DL? DS?" />
        <Article imgUrl={blog05} date="Dropping in Soon" text="DevOps vs DevSecOps | Cloud Computing." />
      </div>
    </div>
  </div>
);

export default Blog;
