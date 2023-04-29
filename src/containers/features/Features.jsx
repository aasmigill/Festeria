import React, { useState } from 'react';
import './features.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Features() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Calendar</h1>
      </div>
      <div className="app">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default Features;
// import Fullcalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// const Features = () => (
//   <div className="gpt3__features section__padding" id="features">
//     <div className="gpt3__features-heading">
//       <h1 className="gradient__text">Calender</h1>
//       <br />
//       <br />
//     </div>
//     <div>
//       <Fullcalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
//           center: 'title',
//           end: 'dayGridMonth,timeGridWeek,timeGridDay', // will normally be on the right. if RTL, will be on the left
//           // title: "titleOptions"
//         }}
//         // titleFormat={{ color: 'white' }}
//         height="90vh"
//         aspectRatio="1:1"
//       />
//     </div>
//   </div>
// );

// export default Features;
// const features = () => (

// )
// const features = () => (
//   <div className="gpt3__features section__padding" id="features">
//    <div className="gpt3__features-heading">
//       <h1 className="gradient__text">Calender</h1>
//       <br />
//       <br />
//     </div>
//     </div>
//     const [date, setDate] = useState(new Date());
//     <div className='app'>
//       <h1 className='text-center'>React Calendar</h1>
//       <div className='calendar-container'>
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <p className='text-center'>
//         <span className='bold'>Selected Date:</span>{' '}
//         {date.toDateString()}
//       </p>
//     </div>

// )

// export default Features;
