import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'C++ Language ⭐⭐⭐',
    text: 'First REAL app development language I ever learnt. Have grasped Advanced ones like Abstract Classes or Multi-Threading. Also developed a Keylogger (Hacking tool to steal  sensitive information).',
  },
  {
    title: 'Python Language ⭐⭐⭐⭐',
    text: 'Currently the Language I am focusing on. Developed 2-3 Tools over the time. Lately focusing on Machine Learning and working with TensorFlow, SciPy, NumPy, Pandas etc.',
  },
  {
    title: 'CSS Mastery ⭐⭐⭐⭐',
    text: 'Been practising CSS for over 4 years now. Have Mastered all types or designs and developed over 4 Corporate Websites.',
  },
  {
    title: 'Javascript ⭐⭐⭐⭐',
    text: 'Using JS for 2+ Years now, experienced with 15+ JS libraries. Most favorite one yet is Babylon.js and Vue.js, FYI- I develop in frontend for fun.',
  },
  {
    title: 'React.js & Next.js ⭐⭐⭐⭐',
    text: 'Simplicity speaks Complexity. React is one of my favorite frameworks that I like to work when it comes to Frontend development. Next.js experience from constantly in Vercel App development chains.',
  },
  {
    title: 'Adobe After Effects ⭐⭐⭐⭐',
    text: 'Professionally & Passionately working for 4+ years in Motion Graphics, Typography & VFX. Have designed Industry Grade designs over the years.',
  },
  {
    title: 'Adobe Photoshop ⭐⭐⭐⭐',
    text: 'Designing poster & diverse graphic assets in Photoshop. Expertise in Photo Retouching, Masking, Color Grading, Typography etc.',
  },
  {
    title: 'Adobe XD & Figma ⭐⭐⭐⭐',
    text: 'Designing Websites, App UI designs and Magazine Covers. Started Newly in late 2021, having fun with it as well.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Welcome to SkillVerse, the place where the only skills that matter are the once that can contribute in more than just making impressive memories in your head.</h1>
      <br />
      <h1 className="gradient__text">I have skills in total 2 segments overall. First one is Design and second one is Development. Further my expertise can sorted in diverse Sub-Segments.</h1>
      <br />
      <h1 className="gradient__text">Majority of the Skills are certified from esteemed organizations like Amazon, Harvard and Coursera.</h1>
      <p>Other Skills are mentioned over my <a href="https://www.linkedin.com/in/kaifshaikhhh/" target="blank"><b><i>LinkedIn</i></b></a></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
