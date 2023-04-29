// import React from 'react';
// // import possibilityImage from '../../assets/possibility.png';
// import './possibility.css';

// const Possibility = () => (
//   <div className="Upcoming_events" id="possibility">
//     <h1 className="Upcoming_events_title">Upcoming Events</h1>
//     <div className="cards">
//       <div className="row">
//         <div className="card">Code for a Cause</div>
//         <div className="card">Hack the Hackathon</div>
//       </div>
//     </div>
//   </div>
// );

// export default Possibility;
import React from 'react';
import './possibility.css';

const Possibility = () => (
  <div className="Upcoming_events" id="possibility">
    <h1 className="Upcoming_events_title">Upcoming Events</h1>
    <div className="cards">
      <div className="row">
        <div className="card">Code for a Cause</div>
        <div className="card">Hack the Hackathon</div>
        <div className="card">BitBox 3.0</div>
        <div className="card">Codevlabs</div>
      </div>
      {/* <div className="row">
        <div className="card">Event 4</div>
        <div className="card">Event 5</div>
        <div className="card">Event 6</div>
      </div> */}
    </div>
  </div>
);

export default Possibility;

