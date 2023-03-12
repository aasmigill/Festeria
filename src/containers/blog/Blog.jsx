import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 18, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 05, 2023" text="Festeria: Connect, Create, and Celebrate!" />
        <Article imgUrl={blog03} date="Jan 10, 2023" text="Festeria's Top Picks: Must-Attend Festivals and Hackathons of the Year" />
        <Article imgUrl={blog04} date="Feb 13, 2023" text="The Future of Festivals and Hackathons: Festeria's Innovative Approach" />
        <Article imgUrl={blog05} date="Feb 26, 2023" text="Festeria: Bringing People Together, One Fest and Hackathon at a Time." />
      </div>
    </div>
  </div>
);

export default Blog;
