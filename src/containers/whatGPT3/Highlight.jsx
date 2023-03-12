import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const Highlight = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Features" text="We are dedicated to providing the ultimate platform for tech enthusiasts around the world. Our website is designed with YOU in mind, to help you connect, collaborate, and innovate with like-minded individuals. Join our community today and unlock your true potential!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Participate and Grow!</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Upcoming Event" text="Stay up-to-date with the latest tech events happening around the world with Festeria's upcoming events feature. Don't miss out on the next big tech event - explore Festeria today!" />
      <Feature title="Reminders" text=" Never miss an event again! Festeria sends you timely reminders for upcoming events, so you can stay on top of your game." />
      <Feature title="Blog" text=" Stay up-to-date with the latest tech news, tips, and trends.Festeria's blog section features insightful articles and expert opinions on all things tech." />
    </div>
  </div>
);

export default Highlight;
